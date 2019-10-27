const mongoose = require('mongoose');

const EnderecoSchema = new mongoose.Schema({
    logradouro: {
        type: String,
        required: true,
    },
    numero: {
        type: Number,
        required: true,
    },
    complemento: {
        type: String,
        required: false,
    },
    bairro: {
        type: String,
        required: true,
    },
    cidade: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Endereco', EnderecoSchema);