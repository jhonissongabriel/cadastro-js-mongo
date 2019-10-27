const mongoose = require('mongoose');

const RecadoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    telefone: {
        type: String,
        required: true,
    },
    relacao: {
        type: String,
        required: true,
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
mongoose.model('Recado', RecadoSchema);