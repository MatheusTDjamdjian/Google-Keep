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
function renderMenuLabels(labels) {
    const li = document.createElement('li');    
    const button = document.createElement('button');    
    const span = document.createElement('span');
    const a = document.createElement('a');
}

// Chamar a função para renderizar as labels
renderMenuLabels(notes.labels);