const moongose = require('mongoose');


const dbConnection = async() => {

    try {

        await moongose.connect(process.env.DB_CNN, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });        

        console.log('CONECTADO');
    }

    catch( error ){
       throw new Error('No se pudo conectar') ;
    }   
};


module.exports =  {
    dbConnection
}