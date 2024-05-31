// Função para carregar e renderizar o arquivo HTML

const renderizarNota = (id, title, text, controls, marcadores) => {
    const conteudoResumido = conteudo.substr(0, 600) + '...';
    const notaHtml = ` <div class="notes notes-one notes-two notes-three notes-four">
                            <input type="hidden" class="id-nota" value="${id}">
                            <h1 class="notes-title">${title}</h1>
                            <p class="notes-text">${text}</p>
                            <div class="notes-controls"></div>
                            <p>${marcadores.join(', ')}</p>
                       </div>`;
    document.querySelector('.container-notes').innerHTML += notaHtml; 
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

// Buscar dados no JSON 

fetch('dados.json')
            .then(response => response.json())
            .then(data => {
                data.body.notes.forEach(element => {
                    console.log(element.id)
                });
            })
.catch(error => console.error('Erro ao buscar os dados JSON:', error));