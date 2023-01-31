const path = require('path');
const notes = require('../../db/db')
const uuid = require('../../helpers/uuid')
const router = require('express').Router();
const fs = require('fs');
const createNote = require('../../lib/index');
const deleteNote = require('../../lib/index');
const showNotes = require('../../lib/index');
const findID = require('../../lib/index');


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