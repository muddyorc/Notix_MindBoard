// Lógica da aplicação MindBoard

document.addEventListener('DOMContentLoaded', () => {
    const noteInput = document.getElementById('note-input');
    const addNoteBtn = document.getElementById('add-note-btn');
    const notesBoard = document.getElementById('notes-board');

    addNoteBtn.addEventListener('click', () => {
        const noteText = noteInput.value.trim();
        if (noteText) {
            createNoteElement(noteText);
            noteInput.value = ''; // Limpa o textarea
        }
    });

    function createNoteElement(text) {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.textContent = text;
        notesBoard.appendChild(noteElement);
    }

    console.log('MindBoard iniciado!');
});
