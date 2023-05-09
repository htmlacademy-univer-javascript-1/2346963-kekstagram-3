const imgUploadInput = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = imgUploadOverlay.querySelector('#upload-cancel');

const onPopupEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeOverlay();
  }
};

function openOverlay () {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeOverlay () {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
}

cancelButton.addEventListener('click', () => {
  closeOverlay();
});

imgUploadInput.addEventListener('change', () => {
  openOverlay();
});
