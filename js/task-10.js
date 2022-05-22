function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('#controls > input');
const boxes = document.querySelector('#boxes');

inputEl.addEventListener('change', event => {
  const amount = Number(event.currentTarget.value);
  console.log(amount);

  if (amount > 0) {
    createBtn.addEventListener('click', () => {
      let sizeBox = 0;
      const create = function createBoxes(amount) {
        // for (let i = 1; i <= amount; i += 1) {
        for (let i = inputEl.min; i <= amount; i += 1) {
          let sizeBoxIncr = 30 + sizeBox;
          const box = document.createElement('div');
          box.style.backgroundColor = getRandomHexColor();
          box.style.width = `${sizeBoxIncr}px`;
          box.style.height = `${sizeBoxIncr}px`;
          boxes.append(box);
          console.log(box);
          sizeBox = sizeBoxIncr;
          // break;
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
