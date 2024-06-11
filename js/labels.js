const EstruNotes = [
    {
        id : '',
        title: '',
        text: '',
        controls: [],
        labels: ["trabalho", "pessoal", "escola"]
    },
];

const labelsUnique = [];

notes.forEach(note => {
    note.labels.forEach(label => {
        const index = labelsUnique.indexOf(label);
        if(index === -1){
            labelsUnique.push(label);
        }
    });
});

console.log(labelsUnique);

// Função para renderizar as labels
function renderMenuLabels(marcador) {
    const li = document.createElement('li');    
    const button = document.createElement('button');    
    const span = document.createElement('span');
    const a = document.createElement('a');

    li.classList.add('menu-items');
    button.classList.add('menu-button');
    //li.classList.add('marcador');
    a.href = "arquivo.html";
    a.classList.add("link-menu");
    a.textContent = marcador;
    li.appendChild(button);
    button.appendChild(a);
    a.appendChild(span);
    span.classList.add("material-symbols-outlined");
    a.appendChild(span);
    span.classList.add("menu-list-p");

    document.querySelector('#button-menu').insertBefore(li, document.querySelector('#button-menu .menu-items'))
}

// Chamar a função para renderizar as labels
renderMenuLabels(notes.labels);