const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
    tipo: {
        type: String,
        required: false,
    },
    raca: {
        type: String,
        required: false,
    },
    nome: {
        type: String,
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

mongoose.model('Animal', AnimalSchema);