// Buscar dados no JSON 
var overlay = document.querySelector('.overlay');

fetch('json/dados.json')
    .then(response => response.json())
    .then(data => {
        data.notes.forEach(note => {
            renderizarNota(note.id, note.title, note.text, note.controls);
        });
        resizeAllNotesHeight();
         var notes = document.querySelectorAll('.notes');
         if(overlay) {             
             overlay.addEventListener('click', () => {
                 overlay.style.display = 'none';
                 notes.forEach(note => {
                     note.classList.remove('expandida');
                 });
             });
         }
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
    notaHtml.addEventListener('click', (e) => {
        overlay.style.display = 'block';
        if(Array.from(e.target.classList).indexOf('notes') === -1) {
            e.target.closest('.notes').classList.add('expandida');
        } else {
            e.target.classList.add('expandida');
        }
    });

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

// Botões notas

document.addEventListener("DOMContentLoaded", function() {
    var notes = document.querySelectorAll(".notes");

    notes.forEach(note => {
        note.addEventListener("mouseenter", () => {
            var controls = note.querySelector(".notes-controls");
            if (controls && !note.classList.contains('expandida')) {
                controls.classList.add("controls-on");
                controls.classList.remove("controls-off");
                setTimeout(() => {
                    resizeAllNotesHeight();
                }, 500);
            }
        });

        note.addEventListener("mouseleave", () => {
            var controls = note.querySelector(".notes-controls");
            if (controls && !note.classList.contains('expandida')) {
                controls.classList.add("controls-off");
                controls.classList.remove("controls-on");
                setTimeout(() => {
                    resizeAllNotesHeight();
                }, 500);
            }
        });
    });
});

// Expandir e fechar a nota



// Clique fechar a nota

document.addEventListener("DOMContentLoaded", function() {
   var closeButton = document.querySelectorAll(".btn-notes-fechar");

    closeButton.forEach(button => {
        button.addEventListener("click", function(e) {
            e.stopPropagation();
            var expandedNote = document.querySelector(".notes.expandida");

            if (expandedNote) {
                expandedNote.classList.remove("expandida"); 
                overlay.style.display = 'none';

                var controls = expandedNote.querySelector(".notes-controls");
                var content = expandedNote.querySelector(".notes-content");

                controls.classList.add("controls-off");
                controls.classList.remove("controls-on");
                setTimeout(() => {
                    resizeAllNotesHeight();
                }, 500);
            }
        });
    });
});