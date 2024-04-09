const clica = document.querySelector('.botao');
const user = document.querySelector('.usuario');


clica.addEventListener('click', function() {
    const pessoa = digito();
    usuarioX(pessoa);
});


const digito = function() {
    const pessoa = prompt('Qual e seu nome👀?:');
    return pessoa;
}

const usuarioX = function(pessoa) {
    const userX = document.createElement('userX');
    if(pessoa) {
        userX.innerText = `Olá ${pessoa}, É um praser te conhecer! 😃`;
        user.appendChild(userX);
    }
    return userX;
}

