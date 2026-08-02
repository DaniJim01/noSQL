const mongoose = require('mongoose');

const CarroSchema = new mongoose.Schema({
    modelo: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    motor: {
        type: String,
        required: true
    },
    caballosFuerza: {
        type: Number,
        required: true
    },
    ano: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Carro", CarroSchema);

