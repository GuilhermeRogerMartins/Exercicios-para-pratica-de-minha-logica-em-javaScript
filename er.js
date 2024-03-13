const clica = document.querySelector('.botao');
const user = document.querySelector('.usuario');

function criaUser() {
    const User = document.createElement('User');
    return User;
}

function adicionaNome(h1Text) {
    if(h1Text) {
        const User = criaUser();
        User.innerText = `Olá ${h1Text} , E um prezer te conhecer! 🤙`;
        user.appendChild(User);
    }
}
clica.addEventListener('click', function() {
    const h1Text = digitoUser();
    adicionaNome(h1Text);
});


function digitoUser() {
    const h1Text = prompt('Qual e seu nome?');
    return h1Text;
}


//////////////////////////////////////////////////////////////////

calcular.addEventListener('click', function() {
    const h1 = nomeDoAluno();
    notasAluno(h1);
    // window.location.replace("../Prompt + alert/index.html");
});

function notasAluno(h1) {
    const ponto = prompt('Qual foi sua primeira nota obtida?: ');
    const ponto2 = prompt('Qual foi sua segunda nota obtida?: ');

    if(!isNaN(ponto) && !isNaN(ponto2)) {
        calcularMedia(ponto, ponto2, h1);
    } else {
        alert("As notas tem que ser numeros");
        notasAluno(h1);
    }
}






