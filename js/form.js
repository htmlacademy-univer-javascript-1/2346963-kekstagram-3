import {resetScale} from './scale.js';
import {resetEffects} from './effectsForPhoto.js';

const imgUpload = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = imgUploadOverlay.querySelector('#upload-cancel');
const tag = document.querySelector('.text__hashtags');
const description = document.querySelector('.text__description');

const onPopupEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeOverlay(false);
  }
};

function openOverlay () {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
}

export function closeOverlay (saveData) {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  imgUpload.value = '';
  if (!saveData) {
    resetScale();
    resetEffects();
    tag.value = '';
    description.value = '';
  }
}

cancelButton.addEventListener('click', () => {
  closeOverlay(false);
});

imgUpload.addEventListener('change', () => {
  openOverlay();
});
