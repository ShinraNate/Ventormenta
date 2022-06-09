const {Schema, model} = require('mongoose');

const docentesSchema = Schema({
    IdDocentes:{
        type: Number,
        required: true,
        unique: true
    },
    NombreDocente:{
        type: String,
        required: true
    },
    ApellidoDocente:{
        type: String,
        required: true
    },
    TelefonoDocente:{
        type: Number,
        required: true,
        unique: true
    },
    CorreoDocente:{
        type: String,
        required: true,
        unique: true
    },
    DireccionDocente:{
        type: String,
        required: true
    }
});

module.exports = model('Docentes',docentesSchema);