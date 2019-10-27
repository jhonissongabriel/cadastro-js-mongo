const mongoose = require('mongoose');

const ProfissaoSchema = new mongoose.Schema({
    empresa: {
        type: String,
        required: false,
    },
    profissao: {
        type: String,
        required: false,
    },
    telefone: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
mongoose.model('Profissao', ProfissaoSchema);