const {Schema, model} = require('mongoose');

const materiasSchema = Schema({
    IdMateria:{
        type: Number,
        required: true,
        unique: true
    },
    NombreMateria:{
        type: String,
        required: true,
        unique: true
    }
})

module.exports = model('Materias',materiasSchema);