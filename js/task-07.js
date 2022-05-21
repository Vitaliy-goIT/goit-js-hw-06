const slider = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

// console.dir(slider.value);
// console.dir(textSize);

slider.addEventListener('input', () => {
  textSize.style.fontSize = slider.value + 'px';
});
