const express = require('express');
const app = express();

const book = require('./book.json')

app.use(express.static('public'));

app.get('/page/:num', (req, res) => {
    res.send(book.find((page) => page.id == req.params.num ));
})

module.exports = app;