/* ===== Acting Notes Page Script ===== */
document.addEventListener('DOMContentLoaded', () => {

  // ——— Render Note Cards ———
  const notesGrid = document.getElementById('notesGrid');

  // 최신 노트가 위로 오도록 역순 정렬 (부록은 맨 뒤)
  const ordered = NOTES_DATA.map((note, i) => ({ note, i }))
    .sort((a, b) => {
      const ad = a.note.date === '부록' ? '0000' : a.note.date;
      const bd = b.note.date === '부록' ? '0000' : b.note.date;
      return bd.localeCompare(ad);
    });

  ordered.forEach(({ note, i }) => {
    const card = document.createElement('article');
    card.className = 'note-card';
    card.dataset.index = i;
    card.dataset.cat = note.cat || 'acting';
    card.innerHTML = `
      <span class="note-date">${note.date}</span>
      <h3 class="note-title">${note.title}</h3>
      <p class="note-summary">${note.summary}</p>
      ${note.quote ? `<p class="note-quote">“${note.quote}”</p>` : ''}
      <span class="note-open">자세히 보기 →</span>
    `;
    notesGrid.appendChild(card);
  });

  // ——— 카테고리 탭 (액팅 수업 / 공연기획 수업) ———
  const notesTabs = document.getElementById('notesTabs');
  const notesPhilosophy = document.querySelector('.notes-philosophy');

  function applyNotesTab(cat) {
    notesGrid.querySelectorAll('.note-card').forEach((card) => {
      card.style.display = card.dataset.cat === cat ? '' : 'none';
    });
    // 연기 철학 블록은 액팅 수업 탭에서만 표시
    if (notesPhilosophy) notesPhilosophy.style.display = cat === 'acting' ? '' : 'none';
  }

  notesTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.video-filter');
    if (!btn) return;
    notesTabs.querySelectorAll('.video-filter').forEach((b) => b.classList.toggle('active', b === btn));
    applyNotesTab(btn.dataset.cat);
  });

  applyNotesTab('acting');

  // ——— Note Detail Modal ———
  const noteModal = document.getElementById('noteModal');
  const noteModalDate = document.getElementById('noteModalDate');
  const noteModalTitle = document.getElementById('noteModalTitle');
  const noteModalBody = document.getElementById('noteModalBody');
  const noteModalClose = document.getElementById('noteModalClose');

  function openNoteModal(index) {
    const note = NOTES_DATA[index];
    if (!note) return;
    noteModalDate.textContent = note.date;
    noteModalTitle.textContent = note.title;
    noteModalBody.innerHTML = note.body || `<p>${note.summary}</p>`;
    noteModal.classList.add('active');
    noteModal.querySelector('.note-modal-panel').scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }

  function closeNoteModal() {
    noteModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  notesGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.note-card');
    if (card) openNoteModal(Number(card.dataset.index));
  });

  noteModalClose.addEventListener('click', closeNoteModal);
  noteModal.addEventListener('click', (e) => {
    if (e.target === noteModal) closeNoteModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNoteModal();
  });

  // ——— Mobile Nav Toggle ———
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
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

});
