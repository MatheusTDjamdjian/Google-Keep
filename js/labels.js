document.addEventListener('DOMContentLoaded', function() {
    const notesContainer = document.getElementById('notes-container');
    const dynamicLabelsContainer = document.getElementById('dynamic-labels');

    fetch('dados.json')
        .then(response => response.json())
        .then(data => {
            const notes = data.notes;
            const labelsSet = new Set();

            notes.forEach(note => {
                note.labels.forEach(label => labelsSet.add(label));
                createNoteElement(note);
            });

            labelsSet.forEach(label => createLabelElement(label));
            addLabelFilterEvent();
        })
        .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));

    function createNoteElement(note) {
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.innerHTML = `
            <h2>${note.title}</h2>
            <p>${note.text}</p>
            <div>${note.labels.map(label => `<span class="label">${label}</span>`).join(' ')}</div>
            <div>${note.controls.map(control => `<button>${control}</button>`).join(' ')}</div>
        `;
        notesContainer.appendChild(noteElement);
    }

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
        const notes = document.querySelectorAll('.note');
        notes.forEach(note => {
            const noteLabels = Array.from(note.querySelectorAll('.label')).map(el => el.textContent);
            if (label === 'all' || noteLabels.includes(label)) {
                note.style.display = '';
            } else {
                note.style.display = 'none';
            }
        });
    }
});