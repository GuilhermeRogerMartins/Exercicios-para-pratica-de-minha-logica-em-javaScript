function MultipleAction() {
  this.newButtonP = document.querySelector('.container');
  this.display = document.querySelector('.text');

  this.startClick = () => {
    const remove  = this.display;
    remove.innerText = '';
    const numberP = this.setNumbers();
    if(numberP) return numberP;
  };

  this.displaySoma = (num1,num2,result) => {
    const textPage = document.createElement('resultpage');
    textPage.innerText = `Resultado da soma de: ${num1} + ${num2} = ${result}`;
    this.display.appendChild(textPage);
  };

  this.displaySubitra = (num1,num2,result) => {
    const textPage = document.createElement('resultpage');
    textPage.innerText = `Resultado da subitração de: ${num1} - ${num2} = ${result}`;
    this.display.appendChild(textPage);
  };

  this.displayMulti = (num1,num2,result) => {
    const textPage = document.createElement('resultpage');
    textPage.innerText = `Resultado da multiplicação de: ${num1} * ${num2} = ${result}`;
    this.display.appendChild(textPage);
  };

  this.displayDiv = (num1,num2,result) => {
    const textPage = document.createElement('resultpage');
    textPage.innerText = `Resultado da divisão de: ${num1} / ${num2} = ${result}`;
    this.display.appendChild(textPage);
  };

  this.setNumbers = () => {
    const num1 = Number(prompt('Digite o primeiro número: '));
    const num2 = Number(prompt('Digite o segundo valor: '));
    if(!isNaN(num1) && !isNaN(num2)) {
      this.selectAction(num1,num2);
    } else {
      alert('UM DOS VALORES NÃO E UM NÚMERO!');
      this.startClick();
    }
  };

  this.selectAction = (num1,num2) => {
    const setFunction = Number(prompt(`Valores informados: ${num1} e ${num2}.
    O que vamos fazer?
    [1]Somar
    [2]Subitrair
    [3]Multiplicar
    [4]Dividir`));
    if(setFunction === 1) {
      const result = num1 + num2;
      this.displaySoma(num1,num2,result);
    }
    if(setFunction === 2) {
      const result = num1 - num2;
      this.displaySubitra(num1,num2,result);
    }
    if(setFunction === 3) {
      const result = num1 * num2;
      this.displayMulti(num1,num2,result);
    }
    if(setFunction === 4) {
      const result = num1 / num2;
      this.displayDiv(num1,num2,result);
    }
    if(setFunction > 4) {
      alert('NÃO A FUNÇÂO PARA ESTE VALOR!');
      const clear = this.display;
      clear.innerText = 'Não foi possivel realizar sua tarefa tente novamente!';
      return;
    }
  };

  this.createButton = () => {
    const newButton = document.createElement('button');
    newButton.innerHTML = 'Clique para iniciar';
    this.newButtonP.appendChild(newButton);
    newButton.addEventListener('click', () => {
    this.startClick();
    });
  };
}
const startActions = new MultipleAction();
startActions.createButton();

