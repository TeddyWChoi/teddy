/* ===== Main Script ===== */
document.addEventListener('DOMContentLoaded', () => {

  // ——— Works Data (Instagram-style feed) ———
  // 이미지: images/works/<slug>/ 폴더. fit: 'contain'은 크롭하면 안 되는 컷(포스터·가로 사진)에 지정.
  const works = [
    {
      slug: 'murder',
      title: '머더',
      tag: '연극',
      meta: '대학로 공연장 (예정) · 2026.11',
      caption: '창작연극 〈머더〉. 최강식 역으로 준비 중입니다. 2026년 11월, 대학로에서 만나요.',
      hashtags: '#머더 #창작연극 #대학로 #공연예정 #배우최테디',
      images: [
        { src: 'images/works/murder/murder_01.jpg' },
      ],
    },
    {
      slug: 'last-rehearsal',
      title: '마지막 리허설',
      tag: '낭독극',
      meta: '부암아트홀 · 2026.07',
      caption: '틔움 리딩 페스티벌 낭독극 〈마지막 리허설〉. 최청년 역. 목소리와 호흡만으로 쌓아 올린 무대였습니다.',
      hashtags: '#마지막리허설 #낭독극 #부암아트홀 #틔움리딩페스티벌 #배우최테디',
      images: [
        { src: 'images/works/last-rehearsal/rehearsal_01.jpg' },
        { src: 'images/works/last-rehearsal/rehearsal_02.jpg' },
        { src: 'images/works/last-rehearsal/rehearsal_03.jpg', fit: 'contain' },
        { src: 'images/works/last-rehearsal/rehearsal_04.jpg', fit: 'contain' },
        { src: 'images/works/last-rehearsal/rehearsal_05.jpg', fit: 'contain' },
        { src: 'images/works/last-rehearsal/rehearsal_06.jpg' },
        { src: 'images/works/last-rehearsal/rehearsal_07.jpg' },
        { src: 'images/works/last-rehearsal/rehearsal_08.jpg' },
        { src: 'images/works/last-rehearsal/rehearsal_09.jpg' },
        { src: 'images/works/last-rehearsal/rehearsal_10.jpg' },
      ],
    },
    {
      slug: 'showman',
      title: '위대한쇼맨',
      tag: '뮤지컬',
      meta: '북아현 아트홀 · 2026.06',
      caption: '뮤지컬 프로젝트 공연 〈위대한쇼맨〉. 어린 바넘, 찰스 역으로 무대에 섰습니다. 함께 만들어서 더 빛났던 무대.',
      hashtags: '#위대한쇼맨 #뮤지컬 #북아현아트홀 #배우최테디',
      images: [
        { src: 'images/works/showman/showman_01.jpg' },
        { src: 'images/works/showman/showman_02.jpg' },
        { src: 'images/works/showman/showman_03.jpg' },
        { src: 'images/works/showman/showman_04.jpg' },
        { src: 'images/works/showman/showman_05.jpg' },
        { src: 'images/works/showman/showman_06.jpg' },
        { src: 'images/works/showman/showman_07.jpg', fit: 'contain' },
        { src: 'images/works/showman/showman_08.jpg' },
        { src: 'images/works/showman/showman_09.jpg' },
      ],
    },
    {
      slug: 'maiden-flight',
      title: '처녀비행',
      tag: '연극',
      meta: '연극집단 귀인 · 2025.12',
      caption: '연극집단 귀인 〈처녀비행〉. 배우1, 잭 앤더슨 역. 처음 비행하는 마음으로, 매 장면에 온 마음을 실었습니다.',
      hashtags: '#처녀비행 #연극 #극단귀인 #배우최테디',
      images: [
        { src: 'images/works/maiden-flight/maiden_01.jpg' },
        { src: 'images/works/maiden-flight/maiden_02.jpg' },
        { src: 'images/works/maiden-flight/maiden_03.jpg' },
        { src: 'images/works/maiden-flight/maiden_04.jpg' },
        { src: 'images/works/maiden-flight/maiden_05.jpg' },
        { src: 'images/works/maiden-flight/maiden_06.jpg' },
      ],
    },
    {
      slug: 'democracy-wave',
      title: '민주의 물결',
      tag: '춤극',
      meta: '남영동 민주화운동기념관 · 2025.08',
      caption: '도슨트 공연 〈민주의 물결〉. 몸으로 기록한 역사. 단체 춤극의 연기와 안무로 함께했습니다.',
      hashtags: '#민주의물결 #춤극 #민주화운동기념관 #배우최테디',
      images: [
        { src: 'images/works/democracy-wave/democracy_01.jpg' },
        { src: 'images/works/democracy-wave/democracy_02.jpg' },
        { src: 'images/works/democracy-wave/democracy_03.jpg' },
        { src: 'images/works/democracy-wave/democracy_04.jpg' },
        { src: 'images/works/democracy-wave/democracy_05.jpg' },
        { src: 'images/works/democracy-wave/democracy_06.jpg' },
        { src: 'images/works/democracy-wave/democracy_07.jpg' },
        { src: 'images/works/democracy-wave/democracy_08.jpg' },
      ],
    },
    {
      slug: 'hongdae-live',
      title: '정기연주회 〈여명〉',
      tag: '라이브',
      meta: '홍대 베짱이홀 · 2026.05',
      caption: '태성실용음악학원 정기연주회 〈여명〉. 빛이 시작되는 순간, 홍대 베짱이홀에서 노래했습니다.',
      hashtags: '#여명 #홍대공연 #라이브 #보컬 #배우최테디',
      images: [
        { src: 'images/works/hongdae-live/hongdae_01.jpg', fit: 'contain' },
        { src: 'images/works/hongdae-live/hongdae_02.jpg' },
        { src: 'images/works/hongdae-live/hongdae_03.jpg' },
        { src: 'images/works/hongdae-live/hongdae_04.jpg' },
      ],
    },
    {
      slug: 'busking',
      title: '버스킹',
      tag: '보컬',
      meta: '거리 공연 · Ongoing',
      caption: '거리에서 부르는 노래. 버스킹은 관객과 가장 가까워지는 무대입니다. 오늘도 꾸준히, 한 곡씩.',
      hashtags: '#버스킹 #보컬 #거리공연 #배우최테디',
      images: [
        { src: 'images/works/busking/busking_01.jpg' },
        { src: 'images/works/busking/busking_02.jpg' },
        { src: 'images/works/busking/busking_03.jpg' },
      ],
    },
    {
      slug: 'fitness',
      title: '피트니스',
      tag: '트레이닝',
      meta: '바디 프로필 준비 중 · Ongoing',
      caption: '배우의 몸도 연기의 일부라고 생각합니다. 헬스·수영·클라이밍·복싱으로 매일 단련 중. 바디 프로필로 곧 인사드릴게요.',
      hashtags: '#피트니스 #운동하는배우 #바디프로필준비중 #배우최테디',
      images: [
        { src: 'images/works/fitness/fitness_01.jpg' },
      ],
    },
  ];

  // ——— Render Works Feed ———
  const worksFeed = document.getElementById('worksFeed');
  const AVATAR_SRC = 'images/profile_main.jpeg';

  works.forEach((work) => {
    const card = document.createElement('article');
    card.className = 'insta-card fade-in';

    const slides = work.images.map((img, i) => `
      <div class="insta-slide">
        <img src="${img.src}" alt="${work.title} 공연 사진 ${i + 1}" loading="lazy"
             class="${img.fit === 'contain' ? 'fit-contain' : ''}" data-src="${img.src}">
      </div>
    `).join('');

    const dots = work.images.map((_, i) =>
      `<span class="insta-dot${i === 0 ? ' active' : ''}"></span>`
    ).join('');

    card.innerHTML = `
      <header class="insta-header">
        <span class="insta-avatar"><img src="${AVATAR_SRC}" alt="최테디 프로필"></span>
        <div class="insta-header-text">
          <span class="insta-title">${work.title}</span>
          <span class="insta-meta">${work.meta}</span>
        </div>
        <span class="insta-tag">${work.tag}</span>
      </header>
      <div class="insta-carousel">
        <div class="insta-track">${slides}</div>
        ${work.images.length > 1 ? `
          <button class="insta-arrow prev" aria-label="이전 사진">
            <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
          </button>
          <button class="insta-arrow next" aria-label="다음 사진">
            <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
          </button>
          <span class="insta-counter">1/${work.images.length}</span>
        ` : ''}
      </div>
      ${work.images.length > 1 ? `<div class="insta-dots">${dots}</div>` : ''}
      <div class="insta-actions">
        <svg viewBox="0 0 24 24" class="insta-icon heart"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        <svg viewBox="0 0 24 24" class="insta-icon"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
        <svg viewBox="0 0 24 24" class="insta-icon"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
      </div>
      <div class="insta-caption">
        <span class="insta-username">teddy.w.choi</span> ${work.caption}
        <span class="insta-hashtags">${work.hashtags}</span>
      </div>
    `;
    worksFeed.appendChild(card);

    // Carousel behavior
    const track = card.querySelector('.insta-track');
    const counter = card.querySelector('.insta-counter');
    const dotEls = card.querySelectorAll('.insta-dot');
    let index = 0;

    function goTo(i) {
      index = Math.max(0, Math.min(i, work.images.length - 1));
      track.style.transform = `translateX(-${index * 100}%)`;
      if (counter) counter.textContent = `${index + 1}/${work.images.length}`;
      dotEls.forEach((d, di) => d.classList.toggle('active', di === index));
    }

    const prevBtn = card.querySelector('.insta-arrow.prev');
    const nextBtn = card.querySelector('.insta-arrow.next');
    if (prevBtn) prevBtn.addEventListener('click', () => goTo(index - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(index + 1));

    // Swipe support (mobile)
    let startX = null;
    track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', (e) => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) goTo(index + (dx < 0 ? 1 : -1));
      startX = null;
    }, { passive: true });

    // Double-tap style like (decorative)
    const heart = card.querySelector('.insta-icon.heart');
    heart.addEventListener('click', () => heart.classList.toggle('liked'));
  });

  // ——— Acting Notes Data (acting/ 폴더의 1:1 수업 PDF 요약) ———
  const actingNotes = [
    { date: '2026.01.17', title: '연기란? (OT)', summary: '연기는 단순한 움직임이 아니라, 분명한 목적과 선택으로 관객에게 영향을 끼치는 \'행위\'다. 예술은 인간의 유한함에 대한 자각에서 시작된다.', quote: '나는 죽지만, 내 작품은 남는다.' },
    { date: '2026.01.24', title: '연기의 단상 & 방법론', summary: '연기는 수단과 목적이 일치하는 \'놀이\'여야 한다. 감정을 직접 재현하려 하기보다, 반복 가능한 행위를 설계할 때 감정이 따라온다.', quote: '감정은 믿지 말고, 행위를 설계하라.' },
    { date: '2026.01.31', title: '낯설게 하기', summary: '익숙한 세계를 새롭게 바라보는 태도가 창조의 출발점. 재능은 그릇일 뿐, 예술은 결핍이 있는 평범한 사람들이 하는 것이다.', quote: '창조의 과정 그 자체가 예술이다.' },
    { date: '2026.02.07', title: '배우와 행동의 본질', summary: '배우(actor)란 행동하는 사람. 인간은 행동에 의미를 부여할 수 있는 유일한 존재이며, 예술은 사실의 흐름에 브레이크를 거는 일이다.', quote: '그래서 돈이 안 된다. 그래서 불편하다. 그래서 필요하다.' },
    { date: '2026.02.14', title: '감정의 중요성', summary: '살아있다는 것은 감정을 느낀다는 것. 배우는 사회화 속에 죽어가는 감정을 깨워, 타인과 세계로 확장시키는 사람이다.', quote: '예술가는 자신의 감정을 무한히 관객에게 확장시키는 사람이다.' },
    { date: '2026.02.21', title: '감정파 vs 이지파', summary: '무대 위의 감정은 날것의 배설이 아니라 사유를 거쳐 승화된 \'기억된 감정\'. 내가 우는 것이 아니라 배역이 울게 한다.', quote: '감정이 크되, 감정에 갇히지 않는 상태 — 그것이 예술적 슬픔이다.' },
    { date: '2026.03.01', title: '태도, 객관화, 장인정신', summary: '욕심 없는 꾸준함으로 기회를 대하고, 장인처럼 반복과 축적을 견딘다. 연기는 말이 아닌 설득력으로 관객을 움직이는 일이다.' },
    { date: '2026.03.07', title: '습관, 아우라, 자발적 가난', summary: '습관은 우리를 현재로부터 분리시킨다. 아우라는 습관을 걷어내고 지금 여기에 머무는 사람에게서 나온다.', quote: '습관은 기술을 만들지만, 생각은 영혼의 빛을 만든다.' },
    { date: '2026.03.14', title: '신화, 고통, 기호와 매력', summary: '신화라는 포장지를 걷어내야 현실의 나와 마주할 수 있다. 고통은 묘사하는 순간, 나를 짓누르는 것이 아닌 \'대상\'이 된다.', quote: '진실의 가장 큰 적은 끈질기고 그럴듯한 신화다.' },
    { date: '2026.03.21', title: '사랑, 캐릭터, 허구', summary: '캐릭터는 말이 아니라 결정적 순간의 선택과 행동으로 드러난다. 허구는 거짓이 아니라, 현실의 본질을 더 깊게 보여주는 재구성이다.', quote: '연극의 진실은 사실이 아니라 허구 속에 있다.' },
    { date: '2026.03.28', title: '예술, 묘사, 영원성', summary: '예술가와 일반인의 차이는 감각이 아니라, 그 감각을 정리해 \'묘사\'하는 능력에 있다.', quote: '꽃이 져도 상관없다. 그 꽃을 본 감정이 내 안에 남아 있으면 된다.' },
    { date: '2026.04.04', title: '호학(好學)', summary: '배우는 자기 자신을 도구로 쓰는 예술가. 배우는 것을 좋아하는 \'호학\'의 태도로 평생을 바라본다.', quote: '좋아하는 마음 + 기술 + 구조 + 경험, 이 네 가지가 균형 잡혀야 진짜 배우다.' },
    { date: '2026.04.11', title: '살아있는 연기', summary: '대사와 동선을 완벽히 수행하는 \'잘하는 연기\'를 넘어, 매 순간 인물로서 반응하는 \'살아있는 연기\'로. 기본기 위에 선 즉흥만이 살아 있다.', quote: '기술은 배우를 만들고, 질문은 진짜 배우를 만든다.' },
    { date: '2026.04.18', title: '무의식을 의식으로', summary: '연기란 일상의 무의식적 행위를 무대 위 의식적·미학적 표현으로 바꾸는 작업이다.', quote: '배우는 표현의 수단이 자기 자신인 유일한 예술가다.' },
    { date: '2026.05.03', title: '현상과 본질, 역지사지', summary: '경험의 나열은 현상일 뿐, 그 속에서 본질을 찾아야 작품이 된다. 연극은 타인이 되어 나를 발견하는 역지사지의 예술이다.', quote: '나는 나를 못 보지만, 타인을 통해 나를 비춰볼 수 있다.' },
    { date: '2026.05.09', title: '좋아하는 세계', summary: '연기를 성과를 계산하는 직업이 아니라, 시간과 돈이 아깝지 않은 \'좋아하는 세계\'로. 배우는 나를 드러내는 사람이 아니라, 나를 숨기고 역할을 살리는 사람이다.', quote: '이 예술을 위해 나는 무엇을 희생할 수 있는가?' },
    { date: '2026.05.17', title: '무문관(無門關)', summary: '자유는 얻는 것이 아니라 쟁취하는 것. 자유를 막는 것은 외부의 억압이 아니라 내 안의 집착이다.', quote: '문이 없으면 그냥 지나가면 된다.' },
    { date: '2026.05.23', title: '서브텍스트와 겪음', summary: '연기는 겉말 아래 숨은 서브텍스트와 삶 전체의 맥락을 읽어 표현하는 일. 몸으로 겪는 예술이기에 AI가 대체하기 어렵다.' },
    { date: '2026.05.30', title: '무대 위의 나, 일상의 나', summary: '무대 위의 빛나는 나와 일상의 평범한 나 사이의 괴리는 통과의례. 초라한 나까지 인정할 때 연극을 오래 할 수 있다.' },
    { date: '2026.06.01', title: '연극이란 무엇인가', summary: '연극의 본질은 \'행동하는 자신을 관찰하는 능력\'. 역할을 사는 이유는 타인을 이해하는 과정을 거쳐, 나를 더 깊이 이해하기 위해서다.' },
    { date: '2026.06.10', title: '감정이 아니라 상호작용', summary: '좋은 연기는 감정 속으로 침잠하는 것이 아니라, 감정을 가진 채 환경을 보고 듣고 반응하는 것이다.', quote: '마음은 한 곳에 머물면 얼어붙는다. 외부와 만나야 살아 움직인다.' },
    { date: '2026.06.15', title: '결과가 아니라 과정', summary: '예술의 가치는 완벽한 결과물이 아니라, 계속 만들어가는 과정에 있다. 좋은 배우란 재능 있는 사람이 아니라 변화할 수 있는 사람이다.', quote: '\'나는 아직 부족하다\'는 사실을 인정하면서도 포기하지 않는 태도.' },
    { date: '부록', title: '연기가 다른 예술과 다른 점', summary: '연기는 배우 자신의 몸·목소리·기억이 곧 도구가 되어, 타인을 살아내는 관계의 예술이다.', quote: '배우는 자신에게 취하지 않고, 끝까지 상대를 본다.' },
  ];

  // ——— Render Acting Notes ———
  const notesGrid = document.getElementById('notesGrid');
  const notesMoreBtn = document.getElementById('notesMoreBtn');
  const NOTES_PREVIEW_COUNT = 6;

  actingNotes.forEach((note, i) => {
    const card = document.createElement('article');
    card.className = 'note-card' + (i >= NOTES_PREVIEW_COUNT ? ' note-hidden' : '');
    card.innerHTML = `
      <span class="note-date">${note.date}</span>
      <h3 class="note-title">${note.title}</h3>
      <p class="note-summary">${note.summary}</p>
      ${note.quote ? `<p class="note-quote">“${note.quote}”</p>` : ''}
    `;
    notesGrid.appendChild(card);
  });

  let notesExpanded = false;
  notesMoreBtn.textContent = `수업 노트 전체 보기 (${actingNotes.length})`;
  notesMoreBtn.addEventListener('click', () => {
    notesExpanded = !notesExpanded;
    notesGrid.querySelectorAll('.note-card').forEach((card, i) => {
      if (i >= NOTES_PREVIEW_COUNT) card.classList.toggle('note-hidden', !notesExpanded);
    });
    notesMoreBtn.textContent = notesExpanded ? '접기' : `수업 노트 전체 보기 (${actingNotes.length})`;
    if (!notesExpanded) document.getElementById('notes').scrollIntoView({ behavior: 'smooth' });
  });

  // ——— Video Data ———
  // vertical: true 인 항목은 세로(9:16) 영상 — 재생 팝업이 세로 비율로 열립니다.
  // thumb가 있으면 로컬 썸네일을, 없으면 YouTube 썸네일을 사용합니다.
  const videos = [
    { id: '32RERk4sk5s', title: '최테디 배우프로필' },
    { id: 'V0yeLhbxzK0', title: '독백 연기 ‘정답을 아는 자’' },
    { id: 'irnGozPnrBA', title: '독백 연기 ‘복수는 나의 것’' },
    { id: '97eFPh6RAwE', title: '연기 영상 3' },
    { id: 'vjDFHS9h16k', title: '연기 영상 4' },
    { id: '1lYjtmGeOJs', title: '연기 영상 5' },
    { id: '69J0dJs5JyE', title: '연기 영상 6' },
    { id: 'DfKUz75Na84', title: '연기 영상 7' },
    { id: '-Ipztn-Vzn8', title: '뮤지컬 〈위대한쇼맨〉 공연 실황 1', thumb: 'images/videos/showman_v1.jpg', vertical: true },
    { id: 'iNCWBP-FvDs', title: '뮤지컬 〈위대한쇼맨〉 공연 실황 2', thumb: 'images/videos/showman_v2.jpg', vertical: true },
    { id: '-KqjyeiKjnE', title: '뮤지컬 〈위대한쇼맨〉 공연 실황 3', thumb: 'images/videos/showman_v3.jpg', vertical: true },
    { id: 'UQewbcSgNGk', title: '뮤지컬 〈위대한쇼맨〉 공연 실황 4', thumb: 'images/videos/showman_v4.jpg', vertical: true },
    { id: 'eJluQn76dAc', title: '연극 〈처녀비행〉 공연 실황 1', thumb: 'images/videos/maiden_v1.jpg', vertical: true },
    { id: 'QIk_zbrwEKA', title: '연극 〈처녀비행〉 공연 실황 2', thumb: 'images/videos/maiden_v2.jpg', vertical: true },
    { id: 'dy-xvHwYo90', title: '춤극 〈민주의 물결〉 공연 실황', thumb: 'images/videos/democracy_v1.jpg', vertical: true },
    { id: 'cAMU9yv-Xt8', title: '버스킹 라이브 1', thumb: 'images/videos/busking_v1.jpg', vertical: true },
    { id: 'nZS97Y-7JzU', title: '버스킹 라이브 2', thumb: 'images/videos/busking_v2.jpg', vertical: true },
    { id: 'oyYpFwCnac0', title: '버스킹 라이브 3', thumb: 'images/videos/busking_v3.jpg', vertical: true },
    { id: '3ZNDpqvuOs0', title: '정기연주회 〈여명〉 라이브 1', thumb: 'images/videos/hongdae_v1.jpg', vertical: true },
    { id: 'CSbxqIOsVBw', title: '정기연주회 〈여명〉 라이브 2', thumb: 'images/videos/hongdae_v2.jpg', vertical: true },
    { id: 'YSwKubSrC5Y', title: '정기연주회 〈여명〉 라이브 3', thumb: 'images/videos/hongdae_v3.jpg', vertical: true },
  ];

  // ——— Render Video Cards ———
  const videoSlider = document.getElementById('videoSlider');

  videos.forEach((video) => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.dataset.videoId = video.id;
    if (video.vertical) card.dataset.vertical = '1';
    const thumbSrc = video.thumb || `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
    card.innerHTML = `
      <div class="video-thumbnail-wrapper">
        <img
          src="${thumbSrc}"
          alt="${video.title}"
          class="video-thumbnail"
          loading="lazy"
          ${video.thumb ? '' : `onerror="this.src='https://img.youtube.com/vi/${video.id}/hqdefault.jpg'"`}
        >
        <div class="video-play-btn">
          <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>
      <div class="video-info">
        <p class="video-title">${video.title}</p>
      </div>
    `;
    videoSlider.appendChild(card);
  });

  // ——— Fetch YouTube Titles ———
  // We'll try to set the titles from oEmbed (no API key needed)
  videos.filter((v) => v.id).forEach(async (video) => {
    try {
      const resp = await fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${video.id}`);
      const data = await resp.json();
      if (data.title) {
        const card = videoSlider.querySelector(`[data-video-id="${video.id}"]`);
        if (card) {
          card.querySelector('.video-title').textContent = data.title;
        }
      }
    } catch (e) {
      // silently fail, keep default title
    }
  });

  // ——— Video Slider Navigation ———
  const sliderPrev = document.getElementById('sliderPrev');
  const sliderNext = document.getElementById('sliderNext');

  function getCardWidth() {
    const card = videoSlider.querySelector('.video-card');
    if (!card) return 300;
    const style = getComputedStyle(videoSlider);
    const gap = parseFloat(style.gap) || 20;
    return card.offsetWidth + gap;
  }

  sliderPrev.addEventListener('click', () => {
    videoSlider.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
  });

  sliderNext.addEventListener('click', () => {
    videoSlider.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
  });

  // ——— Video Modal ———
  const videoModal = document.getElementById('videoModal');
  const videoModalInner = document.getElementById('videoModalInner');
  const videoModalClose = document.getElementById('videoModalClose');

  function openVideoModal(videoId, vertical) {
    videoModalInner.classList.toggle('vertical', !!vertical);
    videoModalInner.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    `;
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeVideoModal() {
    videoModal.classList.remove('active');
    videoModalInner.innerHTML = '';
    document.body.style.overflow = '';
  }

  videoSlider.addEventListener('click', (e) => {
    const card = e.target.closest('.video-card');
    if (card && card.dataset.videoId) {
      openVideoModal(card.dataset.videoId, card.dataset.vertical === '1');
    }
  });

  videoModalClose.addEventListener('click', closeVideoModal);
  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) closeVideoModal();
  });

  // ——— Gallery Lightbox ———
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const galleryGrid = document.getElementById('galleryGrid');

  galleryGrid.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (item) {
      lightboxImg.src = item.dataset.src;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });

  // 작품 활동 피드 사진 클릭 시에도 라이트박스로 확대
  worksFeed.addEventListener('click', (e) => {
    const img = e.target.closest('.insta-slide img');
    if (img) {
      lightboxImg.src = img.dataset.src;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // ——— Mobile Nav Toggle ———
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      navLinks.classList.remove('open');
    }
  });

  // ——— Nav Scroll Effect ———
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // ——— Active Nav Link on Scroll ———
  const sections = document.querySelectorAll('section[id]');
  const navLinksList = document.querySelectorAll('.nav-links a');

  function updateActiveLink() {
    const scrollY = window.scrollY + 100;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinksList.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);

  // ——— Scroll Fade-In Animation ———
  const fadeElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  fadeElements.forEach((el) => observer.observe(el));

  // ——— Keyboard shortcuts ———
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeVideoModal();
    }
  });

});
