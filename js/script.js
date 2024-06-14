// Buscar dados no JSON 

fetch('dados.json')
    .then(response => response.json())
    .then(data => {
        data.notes.forEach(note => {
            renderizarNota(note.id, note.title, note.text, note.controls);
        });
        resizeAllNotesHeight();
    });


    function getRandomNumber() {
    return Math.floor(Math.random() * 4) + 1;
}

const colorClasses = {
    1: 'notes-color-one',
    2: 'notes-color-two',
    3: 'notes-color-three',
    4: 'notes-color-four',
}

// Função para carregar e renderizar o arquivo HTML

const renderizarNota = (id, title, text, controls) => {
    const notaHtml = document.createElement('div');
    notaHtml.classList.add('notes');
    notaHtml.classList.add(colorClasses[getRandomNumber()]);

    const notesContent = document.createElement('div');
    notesContent.classList.add('notes-content');

    const idInput = document.createElement('input');
    idInput.setAttribute('type', 'hidden');
    idInput.classList.add('id-nota');
    idInput.value = id;

    const titleElement = document.createElement('h1');
    titleElement.classList.add('notes-title');
    titleElement.textContent = title;

    const textElement = document.createElement('p');
    textElement.classList.add('notes-text');
    textElement.textContent = text;

    const controlsContainer = document.createElement('div');
    controlsContainer.classList.add('notes-controls');
    
    controls.forEach(control => {
        const controlButton = document.createElement('button');
        controlButton.textContent = control;
        controlsContainer.appendChild(controlButton);
});

    notaHtml.appendChild(notesContent);
    notesContent.appendChild(idInput);
    notesContent.appendChild(titleElement);
    notesContent.appendChild(textElement);
    notesContent.appendChild(controlsContainer);

    document.querySelector('.container-notes').appendChild(notaHtml);
}
