const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  backdrop: document.querySelector('[data-backdrop]'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalBtn.addEventListener('click', onToggleModal);
refs.closeModalBtn.addEventListener('click', onToggleModal);

function onToggleModal() {
  document.body.classList.toggle('modal-open');
  document.body.classList.toggle('show-modal');
  refs.modal.classList.toggle('is-visible');
}
