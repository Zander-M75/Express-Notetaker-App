
//setup imports
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes');

//initialize express

const express = require('express');
const app = express()

const notes = require('./db/db.json');

//Middleware   //parser for incoming data

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
    res.json(notes.slice(1))
});

app.use('/', htmlRoutes)



app.listen(PORT, (req, res) => {
    console.log(`App is listening on port ${PORT}`)
});

