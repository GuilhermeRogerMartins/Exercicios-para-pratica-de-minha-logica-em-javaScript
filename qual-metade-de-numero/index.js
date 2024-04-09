const digito1 = document.querySelector('.clica');
const final = document.querySelector('.resultado');

function digitoNumero() {
    const h1 = prompt('Digite um número');
    return h1;
}

digito1.addEventListener('click', function() {
    const h1 = digitoNumero();
    dobraNumero(h1);
});

function dobraNumero(h1) {
    const digitoN = h1 * 2;
    const metade = h1 / 2;
    resultado(digitoN, metade, h1);
}

function setNumero() {
    const digitado = document.createElement('digitado');
    return digitado;
}

function resultado(digitoN, metade, numeroDigitado) {
    if(numeroDigitado) {
        const digitado = setNumero();
        digitado.innerText = `O dobro de ${numeroDigitado} é ${digitoN}, e a metade é ${metade}`;
        final.appendChild(digitado);
    }
}

