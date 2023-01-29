const path = require('path');
const router = require('express').Router();


router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../../routes/html/notes.js'));
});
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../../routes/html/index.js'));
});

module.exports = router;
