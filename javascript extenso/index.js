const clickPage = document.querySelector('.container');
const displayText = document.querySelector('.text');

function createButton() {
    const newButton1 = document.createElement('button');
    newButton1.innerHTML = 'Botao 1';
    clickPage.appendChild(newButton1);
    newButton1.addEventListener('click', () => {
        const display = displayText;
        display.innerText = 'cliquei no botao 1';
    });
    const newButton2 = document.createElement('button');
    newButton2.innerHTML = 'Botao 2';
    clickPage.appendChild(newButton2);
    newButton2.addEventListener('click', () => {
        const display = displayText;
        display.innerText = 'cliquei no botao 2';
    });
    const newButton3 = document.createElement('button');
    newButton3.innerHTML = 'Botao 3';
    clickPage.appendChild(newButton3);
    newButton3.addEventListener('click', () => {
        const display = displayText;
        display.innerText = 'cliquei no botao 3';
    });
    const newButton4 = document.createElement('button');
    newButton4.innerHTML = 'Botao 4';
    clickPage.appendChild(newButton4);
    newButton4.addEventListener('click', () => {
        const display = displayText;
        display.innerText = 'cliquei no botao 4';
    });
}
createButton();

