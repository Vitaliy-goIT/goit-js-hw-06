let counterValue = 0;

const decrimentBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const number = document.querySelector('#value');

const decriment = decrimentBtn.addEventListener('click', () => {
  counterValue -= 1;
  number.textContent = counterValue;
});

const increment = incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  number.textContent = counterValue;
});
