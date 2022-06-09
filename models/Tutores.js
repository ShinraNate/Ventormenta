const {Schema, model} = require('mongoose');

const tutoresSchema = Schema({
    IdTutor:{
        type: Number,
        required: true,
        unique: true
    },
    NombreTutor:{
        type: String,
        required: true
    },
    ApellidoTutor:{
        type: String,
        reuired: true
    },
    TelefonoTutor:{
        type: Number,
        required: true,
        unique: true
    },
    DireccionTutor:{
        type: String,
        required: true
    },
    CorreoTutor:{
        type: String,
        required: true,
        unique: true
    }
});

module.exports = model('Tutores',tutoresSchema);