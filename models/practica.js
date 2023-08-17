const { Schema, model } = require('mongoose');

const PracticaSchema = Schema({
    carnet: {
        type: Number,
        required: [true, 'El carnet es obligatorio']
    },
   
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    direccion: {
        type: String,
        required: [true, 'La direccion es obligatoria'],
    },
    genero: {
        type: String,
        enum:['masculino', 'femenino'],
        required: [true, 'El genero es obligatorio']
    },
    telefono: {
        type: Number,
        required: [true, 'El telefono es obligatorio'],
    },
    fechaDeNacimiento: {
        type: Date,
        required: [true, 'La fecha de nacimiento es obligatorio'],
    },
    carreraDelEstudiante: {
        type: String,
        required: [true, 'La carrera del estudiante es obligatorio'],
    },
    generoDePoesia: {
        type: String,
        required: [true, 'El genero de poesia es obligatorio'],
    },
    fechaDeInscripcion: {
        type: Date,
        required: [true, 'La fecha de inscripcion es obligatorio'],
    },
    fechaDeExpocicion: {
        type: Date,
        required: [true, 'La fecha de inscripcion es obligatorio'],
    },
});


module.exports = model('Practica', PracticaSchema);