// Lógica da aplicação MindBoard

document.addEventListener('DOMContentLoaded', () => {
    const app = {
        notes: [],
        init() {
            this.elements.init();
            this.handlers.init();
            this.loadNotes();
        },

        elements: {
            noteInput: null,
            addNoteBtn: null,
            notesBoard: null,
            colorPicker: null,
            init() {
                this.noteInput = document.getElementById('note-input');
                this.addNoteBtn = document.getElementById('add-note-btn');
                this.notesBoard = document.getElementById('notes-board');
                this.colorPicker = document.getElementById('color-picker');
            }
        },

        handlers: {
            init() {
                app.elements.addNoteBtn.addEventListener('click', () => {
                    app.addNote();
                });
            }
        },

        addNote() {
            const content = this.elements.noteInput.value.trim();
            const color = this.elements.colorPicker.value;
            if (content) {
                const note = {
                    id: Date.now(),
                    content,
                    color
                };
                this.notes.push(note);
                this.renderNotes();
                this.saveNotes();
                this.elements.noteInput.value = '';
            }
        },

        createNoteElement(note) {
            const noteElement = document.createElement('div');
            noteElement.classList.add('note');
            noteElement.dataset.id = note.id;
            noteElement.style.backgroundColor = note.color;

            const noteContent = document.createElement('div');
            noteContent.classList.add('note-content');
            noteContent.textContent = note.content;

            noteContent.addEventListener('dblclick', () => {
                noteContent.contentEditable = true;
                noteContent.focus();
                noteElement.classList.add('editing');
            });

            noteContent.addEventListener('blur', () => {
                noteContent.contentEditable = false;
                noteElement.classList.remove('editing');
                const newContent = noteContent.textContent.trim();
                this.updateNote(note.id, newContent);
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.innerHTML = '&times;'; // Use &times; for a better 'X' symbol
            deleteBtn.addEventListener('click', () => {
                this.deleteNote(note.id);
            });

            noteElement.appendChild(noteContent);
            noteElement.appendChild(deleteBtn);

            return noteElement;
        },

        updateNote(id, newContent) {
            const note = this.notes.find(n => n.id === id);
            if (note && newContent) {
                note.content = newContent;
            } else if (!newContent) {
                // If content is empty after edit, delete the note
                this.deleteNote(id);
                return;
            }
            this.saveNotes();
        },

        deleteNote(id) {
            this.notes = this.notes.filter(note => note.id !== id);
            this.renderNotes();
            this.saveNotes();
        },

        renderNotes() {
            this.elements.notesBoard.innerHTML = '';
            this.notes.forEach(note => {
                const noteElement = this.createNoteElement(note);
                this.elements.notesBoard.appendChild(noteElement);
            });
        },

        saveNotes() {
            localStorage.setItem('notix-notes', JSON.stringify(this.notes));
        },

        loadNotes() {
            const notes = localStorage.getItem('notix-notes');
            if (notes) {
                this.notes = JSON.parse(notes);
                this.renderNotes();
            }
        }
    };

    app.init();

    console.log('MindBoard iniciado!');
});
