const {authJwt} = require('../middleware');
const controller = require('../controllers/compra.controller');

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

    app.post('/api/compra/guardar/:id_usuario',
    [authJwt.verifyToken],
    controller.guardarCompra
    );

    // Mostrar reservas

    app.get('/api/compra',
    [authJwt.verifyToken],
    controller.mostrarCompras
    );

    // Buscar reserva por el id

    app.get('/api/compra/:id',
    [authJwt.verifyToken],
    controller.mostrarComprasUsuario
    );
}