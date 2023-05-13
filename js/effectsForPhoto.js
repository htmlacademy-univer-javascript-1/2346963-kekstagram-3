import {img} from './scale.js';

const effects = document.querySelector('.effects__list');

effects.addEventListener('click', (evt) => {
  let effect;
  if (evt.target.matches('input[type="radio"]')) {
    img.classList.remove(`effects__preview--${effect}`);
    effect = evt.target.value;
    img.classList.add(`effects__preview--${effect}`);
  }
});
