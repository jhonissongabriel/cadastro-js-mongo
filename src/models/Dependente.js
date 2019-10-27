const mongoose = require('mongoose');

const DependenteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: false,
    },
    relacao: {
        type: String,
        required: false,
    },
    data_nasc: {
        type: Date,
        required: false,
    },
    rg: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Dependente', DependenteSchema);