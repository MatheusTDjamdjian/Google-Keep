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