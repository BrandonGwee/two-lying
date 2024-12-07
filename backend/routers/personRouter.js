const express = require('express');
const router = express.Router();
const {
    createPerson,
    getAllPeople,
    deleteEveryone
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

router.delete('/', (req, res, next) => {
    deleteEveryone()
        .then((person) => res.status(200).json(person))
        .catch(next);
});

module.exports = router;