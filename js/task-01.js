'use strict';

const categoriesList = document.querySelectorAll('.item');
console.log(`В списке ${categoriesList.length} категории.`);

const findNumberOfCategoriesElements = categoriesList.forEach((categorie) => {
  const categorieName = categorie.firstElementChild;

  const categorieElementsList = categorie.lastElementChild;

  return console.log(
    `
    - Категория: ${categorieName.innerHTML} 
    - Количество элементов: ${categorieElementsList.childElementCount}`
  );
});
