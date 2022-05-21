function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');
const bgcBody = document.querySelector('body');

buttonEl.addEventListener('click', () => {
  bgcBody.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
});
