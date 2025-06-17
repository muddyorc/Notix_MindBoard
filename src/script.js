// Lógica da aplicação MindBoard

document.addEventListener('DOMContentLoaded', () => {
    const noteInput = document.getElementById('note-input');
    const addNoteBtn = document.getElementById('add-note-btn');
    const notesBoard = document.getElementById('notes-board');

    addNoteBtn.addEventListener('click', () => {
        const noteText = noteInput.value.trim();
        if (noteText) {
            createNoteElement(noteText);
            noteInput.value = '';
            saveNotes();
        }
    });

    function createNoteElement(text) {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.textContent = text;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'X';
        deleteBtn.addEventListener('click', () => {
            noteElement.remove();
            saveNotes();
        });

        noteElement.appendChild(deleteBtn);
        notesBoard.appendChild(noteElement);
    }

    function saveNotes() {
        const notes = Array.from(notesBoard.getElementsByClassName('note'))
            .map(note => note.childNodes[0].nodeValue || '');
        localStorage.setItem('mindboard-notes', JSON.stringify(notes));
    }

    function loadNotes() {
        const notes = JSON.parse(localStorage.getItem('mindboard-notes')) || [];
        notes.forEach(text => createNoteElement(text));
    }

    loadNotes();

    console.log('MindBoard iniciado!');
});
