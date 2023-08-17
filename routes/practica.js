const { Router } = require('express');
const { check } = require('express-validator');
const { getpractica, postpractica } = require('../controllers/practica');

const {validarCampos} = require ('../middlewares');

const router = Router();

router.get('/mostrar', getpractica);

router.post('/agregar',  [
    check('carnet', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre', 'El correo no es valido').not().isEmpty(),
    check('direccion','La direccion es obligatoria').not().isEmpty(),
    check('genero', 'El genero es obligatorio').not().isEmpty(),
    check('telefono', 'El telefono es obligatorio').not().isEmpty(),
    check('fechaDeNacimiento', 'La fecha es obligatoria').not().isEmpty(),
    check('carreraDelEstudiante', 'La carrera es  obligatorio').not().isEmpty(),
    check('generoDePoesia', 'El genero es obligatorio').not().isEmpty(),
    check('fechaDeInscripcion', 'La fecha es obligatoria').not().isEmpty(),
    check('fechaDeExpocicion', 'La fecha es obligatoria').not().isEmpty(),
    validarCampos
] ,postpractica);

module.exports = router;