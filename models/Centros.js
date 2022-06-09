const { Schema, model } = require('mongoose');

const centrosSchema = Schema({
    IdCentro: {
        type: Number,
        require: true,
        unique: true
    },
    NombreCentro: {
        type: String,
        require: true,
        unique: true
    },
    DireccionCentro: {
        type: String,
        require: true
    }
});

module.exports = model('Centros', centrosSchema);