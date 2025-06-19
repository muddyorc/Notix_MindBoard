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
                // Atalho de teclado Ctrl+Enter para adicionar nota
                app.elements.noteInput.addEventListener('keydown', (e) => {
                    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                        e.preventDefault();
                        app.addNote();
                    }
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
                this.showToast('Nota criada com sucesso!');
            } else {
                // Feedback visual para nota vazia
                this.elements.noteInput.classList.add('input-error');
                setTimeout(() => {
                    this.elements.noteInput.classList.remove('input-error');
                }, 600);
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
            noteContent.style.color = getContrastYIQ(note.color);

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
            deleteBtn.innerHTML = '&times;';
            deleteBtn.setAttribute('aria-label', 'Excluir nota');
            deleteBtn.addEventListener('click', () => {
                app.showDeleteModal(note.id);
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
            try {
                localStorage.setItem('notix-notes', JSON.stringify(this.notes));
            } catch (e) {
                this.showToast('Atenção: Não foi possível salvar as notas (localStorage indisponível).');
            }
        },

        loadNotes() {
            try {
                const notes = localStorage.getItem('notix-notes');
                if (notes) {
                    this.notes = JSON.parse(notes);
                    this.renderNotes();
                }
            } catch (e) {
                this.showToast('Atenção: Não foi possível carregar as notas (localStorage indisponível).');
            }
        },

        showToast(message) {
            let toast = document.createElement('div');
            toast.className = 'toast';
            toast.setAttribute('role', 'status');
            toast.setAttribute('aria-live', 'polite');
            toast.textContent = message;
            document.body.appendChild(toast);
            setTimeout(() => {
                toast.classList.add('show');
            }, 10);
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 400);
            }, 2500);
        },

        showDeleteModal(noteId) {
            // Remove modal anterior se existir
            const oldModal = document.getElementById('delete-modal');
            if (oldModal) oldModal.remove();

            const modal = document.createElement('div');
            modal.id = 'delete-modal';
            modal.className = 'modal-overlay';
            modal.setAttribute('role', 'dialog');
            modal.setAttribute('aria-modal', 'true');
            modal.setAttribute('aria-labelledby', 'delete-modal-label');
            modal.innerHTML = `
                <div class="modal">
                    <p id="delete-modal-label">Deseja realmente excluir esta nota?</p>
                    <div class="modal-actions">
                        <button class="modal-confirm">Confirmar</button>
                        <button class="modal-cancel">Cancelar</button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
            document.querySelector('.modal-confirm').focus();
            document.querySelector('.modal-confirm').onclick = () => {
                this.deleteNote(noteId);
                modal.remove();
            };
            document.querySelector('.modal-cancel').onclick = () => {
                modal.remove();
            };
        }
    };

    app.init();

    console.log('MindBoard iniciado!');
});
