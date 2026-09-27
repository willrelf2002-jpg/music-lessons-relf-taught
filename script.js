// Mobile navigation menu toggle
document.querySelector('.menu').addEventListener('click', () => {
  const nav = document.querySelector('nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.position = 'absolute';
  nav.style.top = '82px';
  nav.style.left = '0';
  nav.style.right = '0';
  nav.style.padding = '20px';
  nav.style.background = 'var(--paper)';
  nav.style.flexDirection = 'column';
});

// Review Modal Interaction
const modal = document.getElementById('review-modal');
const modalText = document.getElementById('modal-text');
const modalCite = document.getElementById('modal-cite');
const closeModal = document.querySelector('.close-modal');

document.querySelectorAll('.review-card').forEach(card => {
  card.addEventListener('click', () => {
    modalText.textContent = card.querySelector('.review-text').textContent;
    modalCite.textContent = card.querySelector('cite').textContent;
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Form Submission Message Handler
document.getElementById('taster-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const successMsg = document.getElementById('form-success');
  
  form.style.display = 'none';
  successMsg.style.display = 'block';
});