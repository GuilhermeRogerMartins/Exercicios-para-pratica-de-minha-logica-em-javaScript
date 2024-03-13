const clica = document.querySelector('.botao')
const paginaWeb = function() {
    prompt("Qual e seu nome?: ");
    alert('Prazer em conhecelo!');
}


clica.addEventListener('click', () => {
    paginaWeb();
});

