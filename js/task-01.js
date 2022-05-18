const categories = document.querySelector('#categories');
console.log(`Number of categories: ${categories.children.length}`);

const itemEl = document.querySelectorAll('.item');
itemEl.forEach(el => {
  const itemTitelEl = el.querySelector('h2');
  const itemListElements = el.querySelector('ul');
  console.log(`Category: ${itemTitelEl.textContent}`);
  console.dir(`Elements: ${itemListElements.children.length}`);
});
