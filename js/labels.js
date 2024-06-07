// Função para renderizar as labels
function renderMenuLabels(labels) {
    const menuDiv = document.querySelector('.container-menu');

    const ul = document.createElement('ul');

    labels.forEach(label => {
        const li = document.createElement('li');
        li.textContent = label;
        ul.appendChild(li);
    });

    menuDiv.appendChild(ul);
}

// Chamar a função para renderizar as labels
renderMenuLabels(nota.labels);