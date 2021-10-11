'use strict';

const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const handleFontSize = () => {
  return (text.style.fontSize = `${fontSizeControl.value / 3.125}px`);
};

fontSizeControl.addEventListener('input', handleFontSize);
