const express = require('express')
const app = express ()
const fs = require('fs');
const path = require('path');
const PORT = 3000
const apiRoute = require('./routes/api');
const htmlRoute = require('./routes/html');

app.use(express.urlencoded({extended: true}));
app.use('/api', apiRoute);
app.use('/', htmlRoute);

app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`)
})
