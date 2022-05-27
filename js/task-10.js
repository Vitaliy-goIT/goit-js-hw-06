const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const createBoxes = amount => {
  let sizeBox = 30;
  const sizeBoxIncr = 10;

  for (let i = inputEl.min; i <= amount; i++) {
    sizeBox = i === 1 ? sizeBox : sizeBox + sizeBoxIncr;
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${sizeBox}px`;
    box.style.height = `${sizeBox}px`;
    boxes.append(box);
  }
};

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('#controls > input');
const boxes = document.querySelector('#boxes');

inputEl.addEventListener('change', event => {
  let amount = Number(event.currentTarget.value);

  if (!Number.isInteger(amount)) {
    alert('Введіть ціле додатнє число!');
  }

  if (amount < 0) {
    alert('Введіть додатнє число!');
  }
});

destroyBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
});

createBtn.addEventListener('click', () => {
  createBoxes(inputEl.value);
});
