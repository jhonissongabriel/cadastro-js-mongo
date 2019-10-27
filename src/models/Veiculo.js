const mongoose = require('mongoose');

const VeiculoSchema = new mongoose.Schema({
    tipo: {
        type: String,
        required: false,
    },
    marca: {
        type: String,
        required: false,
    },
    modelo: {
        type: String,
        required: false,
    },
    cor: {
        type: String,
        required: false,
    },
    placa: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Veiculo', VeiculoSchema);