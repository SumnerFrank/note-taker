router.get('/', (req,res) => {
    res.json(notes);
});

router.post('/', (req,res) => {
    res.json(notes);
});


module.exports = router;