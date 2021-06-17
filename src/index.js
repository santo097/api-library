// Dependencias
const express = require('express');
const server = express();
const cors = require('cors');
const morgan = require('morgan');

// middlewars

// Permite el acceso a las interfaces el uso de las funcionalidades creadas
server.use(cors()); 
/*
    PROTOCOLOS DEL SERVIDOR USANDO MORGAN

    servidor protocolo = 200 => la operacion se realizo de forma satisfactoria
    servidor protocolo = 401 => No se esta autorizado para realizar esta accion
    servidor protocolo = 404 => No se encuentra 
    servidor protocolo = 500 => Error de los controladores; Error en el servidor
*/
// 
server.use(morgan('dev'));
// Habilitar el uso json
server.use(express.json());
/*
    JSON
    {
        "clave":1,
        "clave1":"Cadena",
        "clave2":'Cadena',
        "clave3":1.10
    }
*/
// Habilitar contenidos para pruebas en postman
server.use(express.urlencoded({extended:true}));

// Base de datos

const db = require('./models');
const Role = db.roles;

// Migracion de tablas

// ATENCION EN CASO DE MODIFICACION DE LA BASE DE DATOS DESCOMENTAR CODIGO Y VOLVERLO A COMENTAR PARA EVITAR REINICIO DE INFORMACION
// db.sequelize.sync({force: true}).then(() => {
//     console.log('Drop and Resync Database with { force: true }');
//     initial();
//   });

// Rutas principal

require('./routes/user.routes')(server);
require('./routes/auth.routes')(server);
require('./routes/libros.routes')(server);
require('./routes/reserva.routes')(server);
require('./routes/tarjeta.routes')(server);

server.get('/', (req,res)=>{
    res.json('Hola soy la ruta principal');
});


/*

GET: retornar datos o interfaz
1. Pagina de una plataforma web
2. retornar informacion: json/vector/variable
3. Establecer un id y retornar de la base de datos

POST: enviar informacion al servidor para ejecutar algun proceso
1. Guardada en la base de datos
2. Buscar informacion en la base de datos
3. tareas programadas

PUT: Actualizar informacion existente

DELETE: Borrar informacion 
1. Borrar por un id establecido desde el navegador
2. Borrar sin nigun tipo

*/

const PORT =  process.env.PORT || 3001;
server.listen(PORT , () =>{
    console.log('Servidor en puerto: 3001');
});

function initial(){
    // Crear rol visitante
    Role.create({
        id:1,
        role:"visitante"
    });

    // Crear rol cliente

    Role.create({
        id:2,
        role:"cliente"
    });

    // Crear rol admin

    Role.create({
        id:3,
        role:"admin"
    });

}