const { Schema, model, models } = require('mongoose');

const usuarioSchema = Schema({
    IdUsuario: {
        type: Number,
        required: true,
        unique: true
    },
    NombreUsuario: {
        type: String,
        required: true
    },
    ContraseñaUsuario: {
        type: String,
        required: true
    }

});

module.exports = model('Usuario', usuarioSchema);