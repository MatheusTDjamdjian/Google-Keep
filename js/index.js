// Dark mode
function resizeNoteHeight(item){
    grid = document.getElementsByClassName("container-notes")[0];
    rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    rowSpan = Math.ceil((item.querySelector('.notes-content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllNotesHeight(){
    allItems = document.getElementsByClassName("notes");
    for(x=0;x<allItems.length;x++){
        resizeNoteHeight(allItems[x]);
    }
}

document.querySelector('.container-symbols-header').addEventListener('click', function(e){
    e.preventDefault();
    if(document.body.classList.contains('dark')){
        document.body.classList.remove('dark');
    } else {
        document.body.classList.add('dark');
    }
});

window.addEventListener("resize", resizeAllNotesHeight);
resizeAllNotesHeight();

// Menu
document.querySelector('#button-menu').addEventListener('click', (event) => {
    if(document.querySelector('.menu-config').classList.contains('closed')){
        document.querySelector('.menu-config').classList.remove('closed');
    } else {
        document.querySelector('.menu-config').classList.add('closed');
    }
});

//Labels
document.addEventListener('DOMContentLoaded', function() {
    const notesContainer = document.getElementById('notes-container');
    const dynamicLabelsContainer = document.getElementById('dynamic-labels');

    fetch('json/dados.json')
        .then(response => response.json())
        .then(data => {
            const notes = data.notes;
            const labelsSet = new Set();

            notes.forEach(note => {
                note.labels.forEach(label => labelsSet.add(label));
                renderizarNota(note.id, note.title, note.text, note.controls, note.labels);
            });

            labelsSet.forEach(label => createLabelElement(label));
            addLabelFilterEvent();
        })
        .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));

    function createLabelElement(label) {
        const labelElement = document.createElement('li');
        labelElement.className = 'menu-items';
        labelElement.innerHTML = `
            <button type="button" class="menu-button" data-label="${label}">
                <span class="material-symbols-outlined icons-menu">
                    label
                </span><span class="menu-list-p">${label}</span>
            </button>
        `;
        dynamicLabelsContainer.appendChild(labelElement);
    }

    //Filtrar as labels
    function addLabelFilterEvent() {
        const labelButtons = document.querySelectorAll('.menu-button[data-label]');
        labelButtons.forEach(button => {
            button.addEventListener('click', () => {
                const label = button.getAttribute('data-label');
                filterNotesByLabel(label);
            });
        });
    }

    function filterNotesByLabel(label) {
        const notes = document.querySelectorAll('.notes');
        notes.forEach(note => {
            const noteLabels = note.getAttribute('data-labels').split(',');
            if (label === 'all' || noteLabels.includes(label)) {
                note.style.display = '';
            } else {
                note.style.display = 'none';
            }
        });
    }
});