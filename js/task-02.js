const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');
const listElements = [];

ingredients.forEach(el => {
  const item = document.createElement('li');
  item.textContent = el;
  item.classList.add('item');
  listElements.push(item);
});
list.append(...listElements);
