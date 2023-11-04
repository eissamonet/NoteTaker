const router = require('express').Router();
const storeData = require('../db/storeData');

//requesting notes
router.get('/notes', (req, res) => {
    storeData.retrieveNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
}); 

// POST notes
router.post('/notes', (req, res) => {
    storeData.addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
}); 

// Delete note/request
router.delete('/notes/:id', (req, res) => {
    storeData.removeNote(req.params.id)
    .then(() => res.json({ok: true }))
    .catch(err => res.status(500).json(err));
}); 


module.exports = router;


