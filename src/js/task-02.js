const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const items = ingredients.map(ingredient => {
  
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  return itemEl;
});

const list = document.querySelector('#ingredients');

list.append(...items)

console.log(list)