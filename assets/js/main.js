const contactModal = document.getElementById('contactModal')
const modalOpener = document.getElementById('modalOpener')

contactModal.addEventListener('shown.bs.modal', () => {
  modalOpener.focus()
})