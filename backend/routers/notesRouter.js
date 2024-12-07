const express = require('express');
const router = express.Router();
const {
    createNote,
    getAllNotes,
    deleteAllNotes
} = require('../models/notesModel.js');

router.post('/', (req, res, next) => {
    const { text } = req.body;
    createNote(text)
        .then((note) => res.status(200).json(note))
        .catch(next);
});

router.get('/', (req, res, next) => {
    getAllNotes()
      .then((note) => res.status(200).json(note))
      .catch(next);
});

router.delete('/', (req, res, next) => {
    deleteAllNotes()
        .then((note) => res.status(200).json(note))
        .catch(next);
});

module.exports = router;