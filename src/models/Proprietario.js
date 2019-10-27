const mongoose = require('mongoose');

const ProprietarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    data_nasc: {
        type: Date,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
    },
    documento: {
        type: String,
        required: true,
    },
    orgao_exped: {
        type: String,
        required: true,
    },
    data_exped: {
        type: Date,
        required: true,
    },
    foto: {
        type: Blob,
        required: false,
    },
    info_adicional: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Proprietario', ProprietarioSchema);