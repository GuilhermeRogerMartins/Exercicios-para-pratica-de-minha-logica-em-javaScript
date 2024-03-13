const adicionaClique = document.querySelector('.adiciona');
const reiniciar = document.querySelector('.zeraclique');
const comeca = document.querySelector('.numeros');

let contador = 0;

adicionaClique.addEventListener('click', function() {
    contador += 1;
    comeca.innerHTML = `O contador está com ${contador} cliques.`;
});


reiniciar.addEventListener('click', function() {
    contador = 0;
    comeca.innerHTML = `O contador está com ${contador} cliques.`
});

