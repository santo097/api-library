const {authJwt} = require('../middleware');
const controller = require('../controllers/reserva.controller');

module.exports = (app) =>{

    // Configuracion de encabezado

    app.use(function(req,res,next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );

        next();
    })

    // Crear reserva

    app.post('/api/reserva/guardar',
    [authJwt.verifyToken],
    controller.crearReserva
    );

    // Mostrar reservas

    app.get('/api/reserva',
    [authJwt.verifyToken],
    controller.mostrarReserva
    );

    // Buscar reserva por el id

    app.get('/api/reserva/:id',
    [authJwt.verifyToken],
    controller.mostrarReservaPorId
    );

    // Borrar reserva por el id

    app.get('/api/reserva/borrar/:id',
    [authJwt.verifyToken],
    controller.borrarReserva
    );
}