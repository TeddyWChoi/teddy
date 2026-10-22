#!/usr/bin/env python3
"""노션 수업 노트 → notes-data.js 자동 동기화.

- 노션 'Acting 수업' / '공연기획 수업' 페이지의 하위 페이지 목록을 읽어,
  notes-data.js에 없는 새 수업만 변환해 추가한다 (기존 항목은 건드리지 않음).
- 새 항목이 있으면 notes.html의 notes-data.js 캐시 버전(?v=N)도 올린다.
- 환경변수 NOTION_TOKEN 필요 (GitHub Actions secret).
"""
import json
import os
import re
import sys
import time
import html
import urllib.request
from datetime import date

NOTION_TOKEN = os.environ.get("NOTION_TOKEN")
API = "https://api.notion.com/v1"
HEADERS = {
    "Authorization": f"Bearer {NOTION_TOKEN}",
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json",
}

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_PATH = os.path.join(ROOT, "notes-data.js")
NOTES_HTML_PATH = os.path.join(ROOT, "notes.html")

# 동기화 대상: (노션 페이지 ID, 카테고리)
SOURCES = [
    ("2f969a1b73518084b5c3e7cecdb59f8c", "acting"),      # Acting 수업
    ("3ff69a1b735180c98317cd390beb21eb", "production"),  # 공연기획 수업
]

# 수업 노트가 아닌 하위 페이지 (제목에 포함되면 제외)
SKIP_KEYWORDS = ["협업 제안", "뉴스 읽기", "시낭송", "희곡 분석"]

DATE_RE = re.compile(r"^(\d{1,2})\s*[/월]\s*(\d{1,2})일?\s*[-–—.:]?\s*(.*)$")


def api_get(path):
    req = urllib.request.Request(API + path, headers=HEADERS)
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                return json.load(resp)
        except Exception as e:
            if attempt == 2:
                raise
            time.sleep(2 * (attempt + 1))


def list_children(block_id):
    results, cursor = [], None
    while True:
        path = f"/blocks/{block_id}/children?page_size=100"
        if cursor:
            path += f"&start_cursor={cursor}"
        data = api_get(path)
        results.extend(data.get("results", []))
        if not data.get("has_more"):
            return results
        cursor = data.get("next_cursor")


def rich_to_html(rich):
    out = []
    for r in rich or []:
        text = html.escape(r.get("plain_text", ""))
        if r.get("annotations", {}).get("bold"):
            text = f"<strong>{text}</strong>"
        out.append(text)
    return "".join(out).strip()


def rich_to_plain(rich):
    return "".join(r.get("plain_text", "") for r in (rich or [])).strip()


def blocks_to_html(blocks, depth=0):
    """노션 블록 → 사이트 모달용 HTML (p/h4/ul/li/blockquote/strong만 사용)."""
    parts, list_items = [], []

    def flush_list():
        nonlocal list_items
        if list_items:
            parts.append("<ul>" + "".join(f"<li>{li}</li>" for li in list_items) + "</ul>")
            list_items = []

    for b in blocks:
        t = b.get("type")
        payload = b.get(t, {}) if t else {}
        rich = payload.get("rich_text", [])

        if t in ("bulleted_list_item", "numbered_list_item"):
            text = rich_to_html(rich)
            if b.get("has_children") and depth < 2:
                child_html = blocks_to_html(list_children(b["id"]), depth + 1)
                text += " " + re.sub(r"</?(p|ul|h4|blockquote)>", " ", child_html).strip()
            if text:
                list_items.append(text)
            continue

        flush_list()

        if t in ("heading_1", "heading_2", "heading_3"):
            text = rich_to_html(rich)
            if text:
                parts.append(f"<h4>{text}</h4>")
        elif t == "paragraph":
            text = rich_to_html(rich)
            if text:
                parts.append(f"<p>{text}</p>")
        elif t in ("quote", "callout"):
            text = rich_to_html(rich)
            if text:
                parts.append(f"<blockquote>{text}</blockquote>")
        elif t == "toggle":
            text = rich_to_html(rich)
            if text:
                parts.append(f"<h4>{text}</h4>")
            if b.get("has_children") and depth < 2:
                parts.append(blocks_to_html(list_children(b["id"]), depth + 1))
        elif t == "table" and b.get("has_children"):
            rows = list_children(b["id"])
            cells_html = []
            for row in rows:
                cells = row.get("table_row", {}).get("cells", [])
                texts = [rich_to_plain(c) for c in cells]
                texts = [x for x in texts if x]
                if texts:
                    cells_html.append(html.escape(" — ".join(texts)))
            if cells_html:
                parts.append("<ul>" + "".join(f"<li>{c}</li>" for c in cells_html) + "</ul>")
        # divider, image, code 등은 생략

    flush_list()
    return "".join(parts)


def infer_year(month, today=None):
    today = today or date.today()
    y = today.year
    # 미래 2개월 이상 앞서는 날짜면 작년 노트로 간주
    if month > today.month + 1:
        y -= 1
    return y


def parse_title(raw_title):
    m = DATE_RE.match(raw_title.strip())
    if not m:
        return None
    month, day, title = int(m.group(1)), int(m.group(2)), m.group(3).strip()
    if not (1 <= month <= 12 and 1 <= day <= 31):
        return None
    year = infer_year(month)
    return f"{year}.{month:02d}.{day:02d}", (title or raw_title.strip())


def make_summary(body_html):
    m = re.search(r"<p>(.*?)</p>", body_html)
    text = re.sub(r"<[^>]+>", "", m.group(1)) if m else re.sub(r"<[^>]+>", " ", body_html)
    text = html.unescape(re.sub(r"\s+", " ", text)).strip()
    return text[:157] + "…" if len(text) > 160 else text


def extract_quote(body_html):
    m = re.search(r"<blockquote>(.*?)</blockquote>", body_html)
    if not m:
        return None
    text = html.unescape(re.sub(r"<[^>]+>", "", m.group(1))).strip().strip("“”\"'")
    return (text[:117] + "…") if len(text) > 120 else (text or None)


def main():
    if not NOTION_TOKEN:
        print("ERROR: NOTION_TOKEN 환경변수가 없습니다.", file=sys.stderr)
        sys.exit(1)

    raw = open(DATA_PATH, encoding="utf-8").read()
    json_part = raw.split("const NOTES_DATA = ", 1)[1].rstrip().rstrip(";")
    notes = json.loads(json_part)
    existing_keys = {(n.get("cat", "acting"), n["date"]) for n in notes}

    added = []
    for page_id, cat in SOURCES:
        for block in list_children(page_id):
            if block.get("type") != "child_page":
                continue
            raw_title = block["child_page"].get("title", "")
            if any(k in raw_title for k in SKIP_KEYWORDS):
                continue
            parsed = parse_title(raw_title)
            if not parsed:
                continue
            note_date, title = parsed
            if (cat, note_date) in existing_keys:
                continue
            print(f"새 노트 발견: [{cat}] {note_date} {title}")
            body = blocks_to_html(list_children(block["id"]))
            if not body:
                print(f"  → 본문이 비어 있어 건너뜀")
                continue
            entry = {
                "date": note_date,
                "title": title[:60],
                "summary": make_summary(body),
                "quote": extract_quote(body),
                "body": body,
                "cat": cat,
                "auto": True,
            }
            added.append(entry)
            existing_keys.add((cat, note_date))

    if not added:
        print("새 노트 없음 — 변경 사항이 없습니다.")
        return

    # 삽입: acting은 '부록' 앞에 날짜순으로, production은 맨 뒤에 날짜순으로
    for entry in sorted(added, key=lambda e: e["date"]):
        if entry["cat"] == "acting":
            idx = next((i for i, n in enumerate(notes)
                        if n.get("cat") == "acting" and n["date"] == "부록"), len(notes))
            notes.insert(idx, entry)
        else:
            notes.append(entry)

    with open(DATA_PATH, "w", encoding="utf-8") as f:
        f.write("/* ===== Acting Notes Data (액팅 수업 + 공연기획 수업 — 노션 자동 동기화) ===== */\n")
        f.write("const NOTES_DATA = ")
        json.dump(notes, f, ensure_ascii=False, indent=2)
        f.write(";\n")

    # notes-data.js를 참조하는 페이지들의 캐시 버전 올리기
    for page in (NOTES_HTML_PATH, os.path.join(ROOT, "index.html")):
        src = open(page, encoding="utf-8").read()
        bumped = re.sub(r"notes-data\.js\?v=(\d+)", lambda m: f"notes-data.js?v={int(m.group(1)) + 1}", src)
        if bumped != src:
            open(page, "w", encoding="utf-8").write(bumped)

    print(f"완료: {len(added)}개 노트 추가 (총 {len(notes)}개)")


if __name__ == "__main__":
    main()
