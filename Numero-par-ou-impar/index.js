function CreatePage() {
    this.cButton = document.querySelector('.container');
    this.display = document.querySelector('.text');

    this.checkNumber = (numberP) => {
        if (numberP % 2 === 0) {
            const numberX = document.createElement('numberPair');
            numberX.innerText = `O número ${numberP} que foi digitado é PAR! `;
            this.display.appendChild(numberX);
        } else {
            const numberY = document.createElement('numberOdd');
            numberY.innerText = `O número ${numberP} que foi digitado é IMPAR! `;
            this.display.appendChild(numberY);
        }
    };

    this.validate = () => {
        const erasePage = this.display;
        erasePage.innerText = '';
        const numberP = this.insertNumber();
        if(numberP) this.checkNumber(numberP);
    };

    this.createButton = () => {
        const buttonP = document.createElement('button');
        buttonP.innerHTML = 'Clique para iniciar';
        this.cButton.appendChild(buttonP);
        buttonP.addEventListener('click', () => {
        this.validate();
        });
    };

    this.insertNumber = () => {
        const num = Number(prompt('Digite um número para o comparativo: '));
        if(!isNaN(num)) {
            return num;
        } else {
            alert('Somente números são validos!');
            return this.validate();
        }
    };
}
const startFunction = new CreatePage();
startFunction.createButton();

