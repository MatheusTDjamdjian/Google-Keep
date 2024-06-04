// Buscar dados no JSON 
fetch('dados.json')
    .then(response => response.json())
    .then(data => {
        data.notes.forEach(note => {
            renderizarNota(note.id, note.title, note.text, note.controls);
        });
    });

// Função para carregar e renderizar o arquivo HTML
const renderizarNota = (id, title, text, controls) => {
    const notaHtml = document.createElement('div');
    notaHtml.classList.add('notes', 'notes-one', 'notes-two', 'notes-three', 'notes-four');

    const idInput = document.createElement('input');
    idInput.setAttribute('type', 'hidden');
    idInput.classList.add('id-nota');
    idInput.value = id;

    const titleElement = document.createElement('h1');
    titleElement.classList.add('notes-title');
    titleElement.textContent = title;

    const textElement = document.createElement('p');
    textElement.classList.add('notes-text', 'notes-content');
    textElement.textContent = text;

    const controlsContainer = document.createElement('div');
    controlsContainer.classList.add('notes-controls');
    
    controls.forEach(control => {
        const controlButton = document.createElement('button');
        controlButton.textContent = control;
        controlsContainer.appendChild(controlButton);
    });

    notaHtml.appendChild(idInput);
    notaHtml.appendChild(titleElement);
    notaHtml.appendChild(textElement);
    notaHtml.appendChild(controlsContainer);

    document.querySelector('.container-notes').appendChild(notaHtml);
}
            
// Dark mode

function resizeNoteHeight(item){
    grid = document.getElementsByClassName("container-notes")[0];
    rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    rowSpan = Math.ceil((item.querySelector('.notes-content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    console.log(rowHeight, rowGap, item.querySelector('.notes-content').getBoundingClientRect().height)
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