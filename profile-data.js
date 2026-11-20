/* ===== 배우 프로필 공통 데이터 =====
   index.html(연기 경력 타임라인)과 profile.html(배우 프로필 PDF)이
   함께 사용하는 단일 데이터 소스입니다.
   경력이 추가되면 여기 career 배열만 수정하면 두 곳 모두 반영됩니다. */
const PROFILE_DATA = {
  name: "최테디",
  nameEn: "Teddy Choi",
  tagline: "어떤 역할이든, 내 인생의 주연처럼 —<br>작품을 단단하게 받쳐주는 배우",
  closing: "유명해지기보다, 나이가 들어서도 계속 무대 위에 서 있는 배우.",
  birth: "1985년 12월 5일",
  bodySpec: "165cm / 59kg",
  phone: "010.4170.1279",
  phoneHref: "tel:01041701279",
  email: "teddy.w.choi@gmail.com",
  instagram: "@teddy.w.choi",
  instagramUrl: "https://www.instagram.com/teddy.w.choi/",
  siteLabel: "teddywchoi.github.io/teddy",
  siteUrl: "https://teddywchoi.github.io/teddy/",
  education: [
    "홍익대 국제디자인전문대학원(IDAS) 디자인 경영 (재학)",
    "홍익대 문화예술경영대학원 교차 수강 — 공연기획·극장 경영",
    "계원예술대학교 멀티미디어 디자인 (졸업)"
  ],
  skills: [
    { icon: "🎤", name: "보컬", detail: "실용음악 레슨 2년 · 버스킹 · 공연 경험" },
    { icon: "🎸", name: "기타 연주", detail: "일렉기타 · 어쿠스틱 연주 · 밴드부 · 찬양팀 반주" },
    { icon: "🥊", name: "복싱", detail: "전국생활체육복싱대회 입상" },
    { icon: "🏋️", name: "헬스", detail: "취미 — 꾸준한 몸 관리" }
  ],
  career: [
    { date: "2027.03 (예정)", title: "연극 〈갈매기〉", venue: "대학로 소극장 (예정)", role: "뜨레플레프 역" },
    { date: "2026.11", title: "창작연극 〈머더〉", venue: "대학로 코델아트홀", role: "강식 역" },
    { date: "2026.07", title: "연극 〈마지막 리허설〉", venue: "부암아트홀", role: "김청년 역" },
    { date: "2026.06", title: "뮤지컬 프로젝트 공연 〈위대한쇼맨〉", venue: "북아현 아트홀", role: "어린 바넘, 찰스 역" },
    { date: "2026.05", title: "정기연주회 〈여명〉", venue: "홍대 베짱이홀", role: "보컬·기타", group: "공연", music: true },
    { date: "2026", title: "물결버스킹", venue: "거리 공연", role: "보컬·기타", group: "공연", music: true },
    { date: "2025.12", title: "연극 〈처녀비행〉", venue: "연극집단 귀인", role: "배우1, 잭앤더슨 역" },
    { date: "2025.08", title: "도슨트 공연 〈민주의 물결〉", venue: "남영동 민주화 운동 기념관", role: "단체 춤극, 연기, 안무" },
    { date: "2025.06", title: "자전적 독백극 〈그림자 상담소〉", venue: "호원아트홀", role: "자전적 1인극 — 연출·대본·연기", group: "연극" }
  ]
};
