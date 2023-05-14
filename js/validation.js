import {sendData} from './load.js';
import {closeOverlay} from './form.js';
import {createSystemMessages} from './util.js';

const form = document.querySelector('#upload-select-image');
const comment = document.querySelector('.text__description');
const submitButton = document.querySelector('#upload-submit');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error-text'
});

function checkCommentLength(text){
  return(text.length > 5 && text.length < 120);
}

pristine.addValidator(comment, checkCommentLength,'Comment length should not be more than 120 symbols and less than 5 symbols');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    submitButton.disabled = true;
    sendData(
      () => {
        closeOverlay(false);
        createSystemMessages('success');
        submitButton.disabled = false;
      },
      () => {
        closeOverlay(true);
        createSystemMessages('error');
        submitButton.disabled = false;
      },
      new FormData(evt.target),
    );
  }
});
