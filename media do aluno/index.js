const calcular = document.querySelector('.botao');
const nomeAluno = document.querySelector('.aluno');

function nomeDoAluno() {
    const h1 = prompt('Qual o nome do aluno: ');
    return h1;
}
function calcularMedia(ponto, ponto2, h1) {
    if(ponto && ponto2) {
        const resultado = document.createElement('resultado');
        resultado.innerText = `Calculando a média final de ${h1}.
        As notas obtidas foram ${ponto} e ${ponto2}.
        A média final será ${(ponto + ponto2) / 2}.`
        nomeAluno.appendChild(resultado);
    }
}

calcular.addEventListener('click', function() {
    const h1 = nomeDoAluno();
    notasAluno(h1);
});

function notasAluno(h1) {
    const ponto = Number(prompt('Qual foi sua primeira nota obtida?: '));
    const ponto2 = Number(prompt('Qual foi sua segunda nota obtida?: '));
    
    if(!isNaN(ponto) && !isNaN(ponto2)) {
        calcularMedia(ponto, ponto2, h1);
    } else {
        alert("As notas tem que ser numeros");
        notasAluno(h1);
    }
}

