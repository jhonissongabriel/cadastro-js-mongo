const mongoose = require('mongoose');

const ConjugeSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: false,
    },
    data_nasc: {
        type: Date,
        required: false,
    },
    cpf: {
        type: String,
        required: false,
    },
    rg: {
        type: String,
        required: false,
    },
    orgao_exped: {
        type: String,
        required: false,
    },
    data_exped: {
        type: Date,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Conjuge', ConjugeSchema);