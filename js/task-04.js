'use strict';

const counterValueSpan = document.querySelector('#value');

const btnIncrement = document.querySelector(
  'button[data-action = "increment"]'
);

const btnDecrement = document.querySelector(
  'button[data-action = "decrement"]'
);

let counterValue = 0;

const handleClickIncrement = () => {
  return (counterValueSpan.innerHTML = counterValue += 1);
};

const handleClickDecrement = () => {
  return (counterValueSpan.innerHTML = counterValue -= 1);
};

btnIncrement.addEventListener('click', handleClickIncrement);
btnDecrement.addEventListener('click', handleClickDecrement);
