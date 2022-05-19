const inputEl = document.querySelector('#validation-input');
console.log(typeof inputEl.dataset.length);

inputEl.addEventListener('blur', event => {
  console.log(inputEl.value.length);
  if (event.currentTarget.value.length != event.currentTarget.dataset.length) {
    event.currentTarget.classList.add('invalid');
  }
});
