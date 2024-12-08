const express = require('express');
const router = express.Router();
const {
    createPerson,
    getAllPeople,
    updateWinner,
    deleteEveryone,
} = require('../models/personModel.js');

router.post('/', (req, res, next) => {
    const { name, role } = req.body;
    createPerson(name, role)
        .then((person) => res.status(200).json(person))
        .catch(next);
});

router.get('/', (req, res, next) => {
    getAllPeople()
      .then((person) => res.status(200).json(person))
      .catch(next);
});

router.put('/:id', (req, res, next) => {
    const { id } = req.params;
    const { isWinner } = req.body;

    updateWinner(parseInt(id), isWinner)
        .then((person) => res.status(200).json(person))
        .catch(next);
})

router.delete('/', (req, res, next) => {
    deleteEveryone()
        .then((person) => res.status(200).json(person))
        .catch(next);
});

module.exports = router;