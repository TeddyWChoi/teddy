/* ===== Main Script ===== */
document.addEventListener('DOMContentLoaded', () => {

  // ——— Video Data ———
  const videos = [
    { id: '32RERk4sk5s', title: '최테디 배우프로필' },
    { id: 'IAWzzhdQ98s', title: '연기 영상 1' },
    { id: 'FvvumWVRxoc', title: '연기 영상 2' },
    { id: '97eFPh6RAwE', title: '연기 영상 3' },
    { id: 'vjDFHS9h16k', title: '연기 영상 4' },
    { id: '1lYjtmGeOJs', title: '연기 영상 5' },
    { id: '69J0dJs5JyE', title: '연기 영상 6' },
    { id: 'DfKUz75Na84', title: '연기 영상 7' },
  ];

  // ——— Render Video Cards ———
  const videoSlider = document.getElementById('videoSlider');

  videos.forEach((video) => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.dataset.videoId = video.id;
    card.innerHTML = `
      <div class="video-thumbnail-wrapper">
        <img
          src="https://img.youtube.com/vi/${video.id}/maxresdefault.jpg"
          alt="${video.title}"
          class="video-thumbnail"
          loading="lazy"
          onerror="this.src='https://img.youtube.com/vi/${video.id}/hqdefault.jpg'"
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
  videos.forEach(async (video) => {
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

  function openVideoModal(videoId) {
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
    if (card) {
      openVideoModal(card.dataset.videoId);
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
