// Expandir e fechar a nota

var notes = document.querySelectorAll('.notes');
var overlay = document.querySelector('.overlay');

notes.forEach(note => {
    note.addEventListener('click', () => {
        overlay.style.display = 'block';
        note.classList.add('expandida');
    });
});

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    notes.forEach(note => {
        note.classList.remove('expandida');
    });
});

// Botões notas

document.addEventListener("DOMContentLoaded", function() {
    const notes = document.querySelectorAll(".notes");

    notes.forEach(note => {
        note.addEventListener("mouseenter", () => {
            const controls = note.querySelector(".notes-controls");
            if (controls && !note.classList.contains('expandida')) {
                controls.style.height = "47px";
                setTimeout(() => {
                    resizeAllNotesHeight();
                }, 500);
            }
        });

        note.addEventListener("mouseleave", () => {
            const controls = note.querySelector(".notes-controls");
            if (controls && !note.classList.contains('expandida')) {
                controls.style.height = "0";
                setTimeout(() => {
                    resizeAllNotesHeight();
                }, 500);
            }
        });
    });
});

// Clique fechar a nota

document.addEventListener("DOMContentLoaded", function() {
    const notes = document.querySelectorAll(".notes");
    const closeButton = document.querySelectorAll(".btn-notes-fechar");

    closeButton.forEach(button => {
        button.addEventListener("click", function() {
            const expandedNote = document.querySelector(".notes.expandida");
    
            if (expandedNote) {
                const controls = expandedNote.querySelector(".notes-controls");
                const content = expandedNote.querySelector(".notes-content");
    
                expandedNote.classList.remove("expandida"); 
                controls.style.display = "none"; 
                content.style.height = "auto"; 
            }
        });
    });
});