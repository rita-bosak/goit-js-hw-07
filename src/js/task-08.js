const inputNumber = document.querySelector('input');
const btnRender = document.querySelector('button[data-action = "render"]');
const btnDestroy = document.querySelector('button[data-action = "destroy"]');
const divBoxes = document.querySelector('#boxes');
const style = document.querySelector('style');

function createBoxes(amount) {
    amount = Number(inputNumber.value);
    
    for (let i = 1; i <= amount; i += 1){

        const collectionEl = document.createElement('div');
        
        divBoxes.appendChild(collectionEl);

        collectionEl.classList.add(`box-${[i]}`);
        
        const boxStyle = 
        `.box-${[i]}{
            background-color: rgb(${(Math.random() * 255) + 1}, ${(Math.random() * 255) + 1}, ${(Math.random() * 255) + 1});
            width: ${[i] * 10 + 20}px;
            height: ${[i] * 10 + 20}px;
        }`;

        style.insertAdjacentHTML('beforeend', boxStyle);
    };
    
    return divBoxes;
};

function destroyBoxes() {
    return divBoxes.innerHTML = '';
};

btnRender.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);