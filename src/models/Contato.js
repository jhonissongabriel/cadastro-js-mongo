const mongoose = require('mongoose');

const ContatoSchema = new mongoose.Schema({
    telefone_1: {
        type: String,
        required: true,
    },
    telefone_2: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    observacao: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Contato', ContatoSchema);