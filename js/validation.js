const form = document.querySelector('#upload-select-image');
const comment = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error-text'
});

function checkCommentLength(text){
  return(text.length > 19 && text.length<141);
}

pristine.addValidator(comment, checkCommentLength(comment),'Comment length should not be more than 355 symbols and less than 10 symbols');

form.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});