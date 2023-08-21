const fs = require('fs');
const util = require('util');
const { v4: uuidv4 } = require('uuid');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFile('db/db.json', 'utf8');
    }
    write(note) {
        return writeFile('db/db.json', JSON.stringify(note));
    }

    addNote(note) {
        const { title, text } = note
        if(!title || !text) {
            throw new error('enter title AND text');
        }
        const newNote = { title, text, id: uuidv4()};
        return this.retrieveNotes()
            .then(notes => [...notes, newNote])
            .then(updatedNotes => this.write(updatedNotes))
            .then(() => newNote);
    }
    retrieveNotes(){
        return this.read()
        .then(notes => {
            return JSON.parse(notes) || [];
        })
    }
    removeNote(id) {
        return this.retrieveNotes()
            .then(notes => notes.filter(note => note.id !==id))
            .then(keepNotes => this.write(keepNotes))
    }
};

module.exports = new Store()
