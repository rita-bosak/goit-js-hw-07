'use strict';

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const handleNameOutput = () => {
  if (nameInput.value.length === 0) {
    return (nameOutput.innerHTML = 'незнакомец');
  }

  return (nameOutput.innerHTML = nameInput.value);
};

nameInput.addEventListener('input', handleNameOutput);
