const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', event => {
  const dataLength = Number(event.currentTarget.dataset.length);
  if (event.currentTarget.value.length === dataLength) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  } else {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid');
  }

  if (event.currentTarget.value.length === 0) {
    event.currentTarget.classList.remove('invalid');
    event.currentTarget.classList.remove('valid');
  }
});
