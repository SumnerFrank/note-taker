const express = require('express')
const app = express ()
const PORT = process.env.PORT || 3001;
const apiRoute = require('./routes/api');
const htmlRoute = require('./routes/html');

//Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

//routes - Middleware
app.use('/api', apiRoute);
app.use('/', htmlRoute);

//listener starts server on assigned PORT number
app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`)
})