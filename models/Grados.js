const {Schema, model} = require('mongoose');

const gradosSchema = Schema({
    IdGrado:{
        type: Number,
        required: true,
        unique: true
    },
    NombreGrado:{
        type: String,
        required: true,
        unique: true
    }
});

module.exports = model('Grados',gradosSchema);