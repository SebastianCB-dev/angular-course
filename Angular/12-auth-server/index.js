const express = require('express');
const routes = require('./routes/auth.routes');
const cors = require('cors');
const { dbConnection } = require('./database/config');

// Variables de entorno
require('dotenv').config();

// Crear el servidor/aplicación de express
const app = express();

//DB Connection

dbConnection();

// Public
app.use( express.static('public') );

// !CORS (permite las peticiones de otro dominio)
app.use( cors() );

//Lectura del body de las peticiones o parseo de peticiones 
app.use( express.json() );

// Rutas - Middleware de express
app.use( '/api/auth', routes );

//Manejar demás rutas (Angular)


app.listen( process.env.PORT, ()=> {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});