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