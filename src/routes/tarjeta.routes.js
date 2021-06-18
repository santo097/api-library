const {authJwt} = require('../middleware');
const controller = require('../controllers/tarjeta.controller');

module.exports = (app) =>{

    // Configuracion de encabezado

    app.use(function(req,res,next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );

        next();
    })

    // Crear tarjeta

    app.post('/api/tarjeta/guardar',
    [authJwt.verifyToken],
    controller.guardarTarjeta
    );

    // Ver Tarjeta

    app.get('/api/tarjeta/:id_usuario',
    [authJwt.verifyToken],
    controller.mostrarTarjeta);
    
}