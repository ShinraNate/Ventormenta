const {Schema, model} = require('mongoose');

const estudiantesSchema = Schema({
    IdEstudiante:{
        type: Number,
        required: true,
        unique: true
    },
    NombreEstudiante:{
        type: String,
        required: true
    },
    ApellidoEstudiante:{
        type: String,
        required: true
    },
    TelefonoEstudiante:{
        type: Number,
        required: true,
        unique: true
    },
    DireccionEstudiante:{
        type: String,
        required: true
    },
    CorreoEstudiante:{
        type: String,
        required: true,
        unique: true
    }
});

module.exports = model('Estudiantes',estudiantesSchema);