const { response, request } = require('express');
const bcrypt = require('bcryptjs');
//Importación del modelo
const practica = require('../models/practica');

const getpractica = async (req = request, res = response) => {

    //condiciones del get
    const query = { estado: true };

    const listapractica = await Promise.all([
        practica.countDocuments(query),
        practica.find(query)
    ]);

    res.json({
        msg: 'get Api - Controlador practica',
        listapractica: listapractica   
    });

}

const postpractica = async (req = request, res = response) => {

    //Desestructuración
    const { carnet, nombre, direccion, genero, telefono, fechaDeNacimiento, carreraDelEstudiante, generoDePoesia, fechaDeInscripcion, fechaDeExpocicion} = req.body;
    const practicaGuardadoDB = new practica({ carnet, nombre, direccion, genero, telefono, fechaDeNacimiento, carreraDelEstudiante, generoDePoesia, fechaDeInscripcion, fechaDeExpocicion });

    //Guardar en BD
    await practicaGuardadoDB.save();

    res.json({
        msg: 'Post Api - Post practica',
        practicaGuardadoDB: practicaGuardadoDB
    });

}


module.exports = {
    getpractica: getpractica,
    postpractica: postpractica,
}


// CONTROLADOR