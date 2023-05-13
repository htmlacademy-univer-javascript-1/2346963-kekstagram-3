const form = document.querySelector('#upload-select-image');
const comment = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error-text'
});

function checkCommentLength(text){
  return(text.length > 5 && text.length<120);
}

pristine.addValidator(comment, checkCommentLength,'Comment length should not be more than 120 symbols and less than 5 symbols');

form.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});
