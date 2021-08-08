const store = require('../db/store');
const router = require('express').Router();
const fs = require('fs')

// GET /api/notes should read the db.json file and return all saved notes as JSON.
router.get('/notes', (req, res) => {
    store
        .getNotes()
        .then(notes => {
            return res.json(notes)
        })
        .catch(err => res.status(500).json(err))
})

//POST /api/notes should receive a new note to save on the request body, add it to the db.json file

router.post('/notes', (req, res) => {
    store
        .addNotes(req.body)
        .then((note) => res.json(note))
        .catch((err) => res.status(500).json(err));
});

// Delete Bonus:

router.delete('/api/notes/:id', (req, res) => {
    const choiceDelete = req.params.id;
    
    console.log(choiceDelete);

    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;

        dbData = JSON.parse(data);

        const filterChoice = notes.filter(val => val.id !== choice);

        console.log(dbData);

        stringData = JSON.stringify(dbData);

        fs.writeFile(notesDataFile, JSON.stringify(filterChoice, null, "\t")).then(() => {
            res.json(filterChoice);
        })
    })
});


module.exports = router;

