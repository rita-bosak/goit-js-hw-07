const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const handleFontSize = () => {
    return text.style.fontSize = `${fontSizeControl.value}px`;
};

fontSizeControl.addEventListener('change', handleFontSize)

