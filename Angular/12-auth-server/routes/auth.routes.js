const { Router } = require('express');
const { check } = require('express-validator');
const { userRegister, userLogin, userToken } = require('../controllers/auth.controller');
const { validarCampos } = require('../middlewares/validar-campo');
const { validarJWT } = require('../middlewares/validar-jwt');

const routes = Router();

// Ruta para crear el usuario
routes.post( '/register', [
    check('name', 'El nombre es obligatorio').notEmpty(),
    check('email', 'El correo es obligatoio').isEmail(),
    check('password', 'La contraseña es obligatoria y requiere minimo 6 digitos').isLength({ min: 6 }),
    validarCampos
], userRegister );



// Ruta para login
routes.post( '/', [
    check('email', 'el email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria y requiere minimo 6 digitos').isLength({ min: 6 }),
    validarCampos
], userLogin );

// Validar y revalidar token
routes.get( '/renew', validarJWT ,userToken );


module.exports = routes;