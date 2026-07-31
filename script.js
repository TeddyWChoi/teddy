/* ===== Main Script ===== */
document.addEventListener('DOMContentLoaded', () => {

  // ——— Works Data (Instagram-style feed) ———
  // 이미지: images/works/<slug>/ 폴더. fit: 'contain'은 크롭하면 안 되는 컷(포스터·가로 사진)에 지정.
  const works = [
    {
      slug: 'murder',
      title: '머더',
      tag: '연극',
      meta: '대학로 소극장 (예정) · 2026.11',
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
    const total = work.images.length;
    let index = 0;

    function goTo(i, wrap) {
      index = wrap ? (i + total) % total : Math.max(0, Math.min(i, total - 1));
      track.style.transform = `translateX(-${index * 100}%)`;
      if (counter) counter.textContent = `${index + 1}/${total}`;
      dotEls.forEach((d, di) => d.classList.toggle('active', di === index));
    }

    // 자동 슬라이드: 카드가 화면에 보이는 동안 3.5초마다 다음 사진으로
    // (IntersectionObserver는 화면 밖 카드를 멈추는 보조 역할 — 기본은 재생)
    let autoTimer = null;
    let inView = true;

    function startAuto() {
      if (autoTimer || !inView || total < 2) return;
      autoTimer = setInterval(() => goTo(index + 1, true), 3500);
    }

    function stopAuto() {
      clearInterval(autoTimer);
      autoTimer = null;
    }

    function resetAuto() {
      stopAuto();
      startAuto();
    }

    if (total > 1) {
      const autoObserver = new IntersectionObserver((entries) => {
        inView = entries[0].isIntersecting;
        if (inView) startAuto();
        else stopAuto();
      }, { threshold: 0.4 });
      autoObserver.observe(card);
      startAuto();

      card.addEventListener('mouseenter', stopAuto);
      card.addEventListener('mouseleave', startAuto);
    }

    const prevBtn = card.querySelector('.insta-arrow.prev');
    const nextBtn = card.querySelector('.insta-arrow.next');
    if (prevBtn) prevBtn.addEventListener('click', () => { goTo(index - 1); resetAuto(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { goTo(index + 1); resetAuto(); });

    // Swipe support (mobile)
    let startX = null;
    track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; stopAuto(); }, { passive: true });
    track.addEventListener('touchend', (e) => {
      if (startX !== null) {
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 40) goTo(index + (dx < 0 ? 1 : -1));
        startX = null;
      }
      startAuto();
    }, { passive: true });

    // Double-tap style like (decorative)
    const heart = card.querySelector('.insta-icon.heart');
    heart.addEventListener('click', () => heart.classList.toggle('liked'));
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
