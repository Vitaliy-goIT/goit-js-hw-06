const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
const value = outputEl.textContent;

inputEl.addEventListener('input', event => {
  if (event.currentTarget.value === '') {
    return (outputEl.textContent = value);
  }
  outputEl.textContent = event.currentTarget.value;
});
