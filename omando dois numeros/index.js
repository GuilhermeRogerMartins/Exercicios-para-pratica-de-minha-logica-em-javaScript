const somar = document.querySelector('.botao');
const resultadoConta = document.querySelector('.resultado');

function digitoNumero() {
    const num1 = Number(prompt('Digite o primeiro número: '));
    const num2 = Number(prompt('Digite o segundo número: '));
    fazConta(num1, num2);
}

somar.addEventListener('click', function() {
    const numero = digitoNumero();
    return numero;
});

function adicionaNumero() {
    const nun = document.createElement('nun');
    return nun;
}

function fazConta(num1, num2) {
    if(num1 && num2) {
        const nun = adicionaNumero();
        nun.innerText = `A soma entre ${num2} e ${num2} é igual a ${(num1 + num2)}`;
        resultadoConta.appendChild(nun);
    }
}

