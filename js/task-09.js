function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');
const bgcBody = document.querySelector('body');

buttonEl.addEventListener('click', () => {
  let color = getRandomHexColor();
  bgcBody.style.backgroundColor = color;
  colorValue.textContent = color;
});
