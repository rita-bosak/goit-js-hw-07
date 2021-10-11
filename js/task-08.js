'use strict';

const input = document.querySelector('input[type = "number"]');
const btnRender = document.querySelector('button[data-action = "render"]');
const btnDestroy = document.querySelector('button[data-action = "destroy"]');
const divBoxes = document.querySelector('#boxes');
const style = document.querySelector('style');

function createBoxes(amount) {
  const boxesMarkup = [];
  const boxesStyle = [];

  for (let i = 1; i <= amount; i += 1) {
    const boxMarkup = `<div class="box-${[i]}"></div>`;

    boxesMarkup.push(boxMarkup);

    const boxStyle = `
    .box-${[i]} {
            background-color: rgb(${Math.random() * 255 + 1}, ${
      Math.random() * 255 + 1
    }, ${Math.random() * 255 + 1});
            width: ${[i] * 10 + 20}px;
            height: ${[i] * 10 + 20}px;
    }`;

    boxesStyle.push(boxStyle);
  }

  divBoxes.insertAdjacentHTML('afterbegin', boxesMarkup.join(' '));

  style.insertAdjacentHTML('beforeend', boxesStyle.join(' '));

  return (input.value = '');
}

function destroyBoxes() {
  return (divBoxes.innerHTML = '');
}

const handleBtnRender = () => {
  divBoxes.innerHTML = '';
  const inputValue = Number(input.value);
  return createBoxes(inputValue);
};

btnRender.addEventListener('click', handleBtnRender);
btnDestroy.addEventListener('click', destroyBoxes);
