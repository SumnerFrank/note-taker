const path = require('path');
const notes = require('/Users/frank/Desktop/bootcamp/note-taker/db/db.json')
const uuid = require('/Users/frank/Desktop/bootcamp/note-taker/helpers/uuid.js')
const router = require('express').Router();
const fs = require('fs');
const createNote = require('../../lib/index.js');
// const deleteNote = require('../../lib/index.js');
const showNotes = require('../../lib/index.js');
const findID = require('../../lib/index.js');


router.get('/', (req,res) => {
    res.json(notes);
});

router.post('/', (req,res) => {
    req.body.id = notes.length.toString()
    const note = createNote(req.body, notes)
    res.json(note);
});

router.delete(':id', (req,res) => {
    res.json(deleteNote(req.params.id, notes));
});

module.exports = router; 