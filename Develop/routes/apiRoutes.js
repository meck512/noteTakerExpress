const store = require('../db/store');
const router = require('express').Router();
const fs = require('fs')

router.get('/notes', (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
        const notes = JSON.parse(data);
        res.json(notes)
    })
});

router.post('/notes', (req, res) => {
    store
        .writeFunction(req.body)
        .then((note) => res.json(note))
        .catch((err) => res.status(500).json(err));
});

module.exports = router;

// POST /api/notes should receive a new note to save on the request body,
// add it to the db.json file, 
// and then return the new note to the client. 
// You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).