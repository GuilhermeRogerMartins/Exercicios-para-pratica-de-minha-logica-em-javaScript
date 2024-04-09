const createButton = document.querySelector('.container');
const displayText = document.querySelector('.result');

function createElement() {
    const buttonNew = document.createElement('button');
    buttonNew.innerHTML = 'Calcula média';
    createButton.appendChild(buttonNew);
    buttonNew.addEventListener('click', () => {
        const removi = displayText;
        removi.innerText = '';
        register();
    });
}

function nameStudent() {
    const name = prompt('Qual e o nome do Aluno?: ');
    return name;
}

function opinionNote(medioNote) {
    if(medioNote >= 6) {
        const noteText = document.createElement('mensege');
        noteText.innerText = `
        A menssagem que temos é: Meus Parabéns!`;
        displayText.appendChild(noteText);
    } else {
        const h1 = document.createElement('mensege1');
        h1.innerText = `
        A menssagem que temos é: Estude um pouco mais!`;
        displayText.appendChild(h1);
    }
}

function register() {
    const name = nameStudent();
    noteStudent(name);
}

function calculateNote(firstNote,secondNote,name) {
    if(firstNote && secondNote) {
        const medioNote = (firstNote + secondNote) / 2;
        const pageText = document.createElement('resultado');
        pageText.innerText = `Calculando a média finel de " ${name} ".
        As notas obtidass foram " ${firstNote} " e " ${secondNote} ".
        A média final será " ${medioNote} ".`
        displayText.appendChild(pageText);
        opinionNote(medioNote);
    }
}

function noteStudent(name) {
    const firstNote = Number(prompt('Qual foi sua primeira nota: '));
    const secondNote = Number(prompt('Qual foi sua segunda nota: '));

    if(!isNaN(firstNote) && !isNaN(secondNote)) {
        calculateNote(firstNote,secondNote,name);
    } else {
        alert('SOMENTE NÚMEROS SÃO PERMITIDOS!');
        register();
    }
}
createElement();

