const { request, response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');
const { db } = require('../models/Usuario');


const userRegister = async( req = request, res = response ) => {

    const { email, name, password } = req.body; 

    try {
        
        //Verificar que no exista el email

        const usuario = await Usuario.findOne({ email });

        if( usuario ) {

            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe con ese email'
            });

        }

        // Crear usuario con el modelo

        const dbUser =  new Usuario( req.body );


        // Encriptar la contraseña
        
        const salt = bcrypt.genSaltSync(10);
        dbUser.password = bcrypt.hashSync( password, salt );

        // Generar el JWT

        const token = await generarJWT( dbUser._id, name );

        // Crear Usuario de DB
        await dbUser.save();

        // Generar respuesta exitosa

        return res.status(201).json({
            ok: true,
            uid: dbUser._id,
            name,
            correo: dbUser.email,
            token
        })

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    } 

};

const userLogin = async( req = request , res = response  ) => {
 
    const { email, password } = req.body; 

    try {

        const dbUser = await Usuario.findOne( {email} );

        if( !dbUser ) {
            return res.status(400).json({
                ok: 'false',
                msg: 'El correo no existe'
            });
        }

        // Confirmar si el password hace match

        const validPassword = bcrypt.compareSync( password, dbUser.password );

        if( !validPassword ) {
            return res.status(400).json({
                ok: 'false',
                msg: 'La contraseña no es valida'
            });
        }

        // Generar el JWT
        const token = await generarJWT( dbUser._id, dbUser.name );

        // Retorno del servicio

        return res.json({
            ok: 'true',
            uid: dbUser._id,
            name: dbUser.name,
            email: dbUser.email,
            token
        });

    }
    catch(err) {
        return res.status(500).json({
            ok: 'false',
            msg: 'Hable con el administrador'
        })
    }

};

const userToken = async( req = request, res = response ) => {
    
    const { uid, name } = req;

    const token = await generarJWT( uid, name );
    const dbUser = await Usuario.findOne( { _id: uid } );
    res.json({
        ok: true,
        uid,
        name,
        email: dbUser.email,
        token
    });

};

module.exports = {
    userRegister,
    userLogin,
    userToken
};