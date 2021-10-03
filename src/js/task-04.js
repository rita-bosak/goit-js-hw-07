const counterValue = document.querySelector('#value');

const btnIncrement = document.querySelector('button[data-action = "increment"]')
const btnDecrement = document.querySelector('button[data-action = "decrement"]')

const handleClickIncrement = () => {
  const counterValueNumber = Number(counterValue.innerHTML);
  return counterValue.innerHTML = counterValueNumber + 1;
};

const handleClickDecrement = () => {
    const counterValueNumber = Number(counterValue.innerHTML);
  return counterValue.innerHTML = counterValueNumber - 1;
};

btnIncrement.addEventListener('click', handleClickIncrement)
btnDecrement.addEventListener('click', handleClickDecrement)

console.log(counterValue);