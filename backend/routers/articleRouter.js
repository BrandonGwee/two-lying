const express = require('express');
const router = express.Router();
const {
    createArticle,
    getAllArticles,
    deleteAllArticles
} = require('../models/articleModel.js');

router.post('/', (req, res, next) => {
    const { name, playerID } = req.body;
    createArticle(name, playerID)
        .then((article) => res.status(200).json(article))
        .catch(next);
});

router.get('/', (req, res, next) => {
    getAllArticles()
      .then((article) => res.status(200).json(article))
      .catch(next);
});

router.delete('/', (req, res, next) => {
    deleteAllArticles()
        .then((article) => res.status(200).json(article))
        .catch(next);
});

module.exports = router;