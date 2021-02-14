(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-modal]'),
    closeModalBtn: document.querySelector('[data-close-modal]'),
    modal: document.querySelector('[data-backdrop]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle('backdrop--hidden');
  }
})();
window.onresize = function(){
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    if(document.documentElement.clientWidth>767 && menuBtnRef.classList.contains('is-open')){
        mobileMenuRef.classList.toggle("is-open");
        menuBtnRef.classList.toggle("is-open");
    }
}