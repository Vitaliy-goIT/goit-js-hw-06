function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('#controls > input');
const boxes = document.querySelector('#boxes');

inputEl.addEventListener('change', event => {
  let amount = Number(event.currentTarget.value);
  console.log(amount);

  if (amount > 0) {
    createBtn.addEventListener('click', () => {
      const create = function createBoxes(amount) {
        let sizeBox = 30;
        let sizeBoxIncr = 10;

        for (let i = inputEl.min; i <= amount; ++i) {
          console.log(i);
          const box = document.createElement('div');
          // box parameters
          box.style.backgroundColor = getRandomHexColor();
          box.style.width = `${sizeBox}px`;
          box.style.height = `${sizeBox}px`;
          // adding box
          boxes.append(box);
          console.log(box);
          sizeBox += sizeBoxIncr;
        }
      };
      create(amount);
    });
  }

  if (!Number.isInteger(amount)) {
    alert('Введіть ціле додатнє число!');
  }

  if (amount < 0) {
    alert('Введіть додатнє число!');
  }
});
