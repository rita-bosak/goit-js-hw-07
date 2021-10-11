'use strict';

const input = document.querySelector('input[type = "number"]');
const btnRender = document.querySelector('button[data-action = "render"]');
const btnDestroy = document.querySelector('button[data-action = "destroy"]');
const divBoxes = document.querySelector('#boxes');
const style = document.querySelector('style');

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const collectionEl[i] = document.createElement('div');

    collectionEl.classList.add(`box-${[i]}`);

    const boxStyle = `.box-${[i]}{
            background-color: rgb(${Math.random() * 255 + 1}, ${
      Math.random() * 255 + 1
    }, ${Math.random() * 255 + 1});
            width: ${[i] * 10 + 20}px;
            height: ${[i] * 10 + 20}px;
        }`;

    style.insertAdjacentHTML('beforeend', boxStyle);
  }
  divBoxes.appendChild(collectionEl);
  return (input.value = '');
}

function destroyBoxes() {
  return (divBoxes.innerHTML = '');
}

const handleBtnRender = () => {
  const inputValue = Number(input.value);
  return createBoxes(inputValue);
};

btnRender.addEventListener('click', handleBtnRender);
btnDestroy.addEventListener('click', destroyBoxes);
