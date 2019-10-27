const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect(
    "mongodb://localhost:27017/cadastro",
    { useNewUrlParser: true }
);
requireDir('./src/models');



// Primeira rota
app.get('/', (req, res) => {
    res.send('SAB - Colinas')
});

app.listen(3001);