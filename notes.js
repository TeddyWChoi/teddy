/* ===== Acting Notes Page Script ===== */
document.addEventListener('DOMContentLoaded', () => {

  // ——— Render Note Cards ———
  const notesGrid = document.getElementById('notesGrid');

  NOTES_DATA.forEach((note, i) => {
    const card = document.createElement('article');
    card.className = 'note-card';
    card.dataset.index = i;
    card.innerHTML = `
      <span class="note-date">${note.date}</span>
      <h3 class="note-title">${note.title}</h3>
      <p class="note-summary">${note.summary}</p>
      ${note.quote ? `<p class="note-quote">“${note.quote}”</p>` : ''}
      <span class="note-open">자세히 보기 →</span>
    `;
    notesGrid.appendChild(card);
  });

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
