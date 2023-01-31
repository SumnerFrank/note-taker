const path = require('path');
const notes = require('../../db.json')
const uuid = require('../../helpers/uuid.js')
const router = require('express').Router();
const fs = require('fs');
const createNote = require('../../lib/index.js');
const deleteNote = require('../../lib/index.js');
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

//need function to delete note 

module.exports = router;