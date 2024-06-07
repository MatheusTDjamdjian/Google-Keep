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
function renderMenuLabels(labelsUnique) {
    const menuDiv = document.querySelector('.container-menu');

    const ul = document.createElement('ul');

    labelsUnique.forEach(label => {
        const li = document.createElement('li');
        li.textContent = label;
        ul.appendChild(li);
    });

    menuDiv.appendChild(ul);
}

// Chamar a função para renderizar as labels
renderMenuLabels(notes.labels);