const path = require('path');
const fs = require('fs');
const { query } = require('express');

//Note Functions
function createNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
    JSON.stringify(notesArray, null, 2),
    ); return note
};

function deleteNote(id, notesArray) {
    const thisNote = notesArray.findIndex( note => {
        return note.id === id;
    });
    notesArray.splice(thisNote, 1);
    fs.writeFileSync(path.join(__dirname, '/Users/frank/Desktop/bootcamp/note-taker/db/db.json'),
    JSON.stringify(notesArray, null, 2));
    return thisNote;
}

function showNotes(body, notesArray) {
    let filteredNotes = notesArray
    if (query.title) {
        filteredNotes = filteredNotes.filter(
            (note) => note.title === query.title
        )
    } return filteredNotes
};

function findID(id, notesArray) {
    const result = notesArray.filter((notes) => 
    notes.id === id)
    return result
};

module.exports = createNote;
module.exports = deleteNote;
module.exports = showNotes;
module.exports = findID;