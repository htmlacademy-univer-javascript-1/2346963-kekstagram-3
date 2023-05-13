const scaleInput = document.querySelector('.scale__control--value');
const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
let scaleValue = scaleInput.value.substring(0, scaleInput.value.length - 1);
export const img = document.querySelector('.img-upload__preview').querySelector('img');

buttonBigger.addEventListener('click', () => {
  if (scaleValue < 100) {
    scaleValue += 25;
    scaleInput.value = `${scaleValue  }%`;
    img.style.transform = `scale(${scaleValue / 100})`;
  }
});

buttonSmaller.addEventListener('click', () => {
  if (scaleValue > 25) {
    scaleValue -= 25;
    scaleInput.value = `${scaleValue  }%`;
    img.style.transform = `scale(${scaleValue / 100})`;
  }
});
