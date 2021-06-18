const {authJwt} = require('../middleware');
const controller = require('../controllers/noticias.controller');

module.exports = (app) =>{

    // Configuracion de encabezado

    app.use(function(req,res,next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );

        next();
    })

    app.post('/api/noticias/guardar',
    [authJwt.verifyToken],
    controller.guardarNoticias
    );

    app.get('/api/noticias',
    [authJwt.verifyToken],
    controller.mostrarNoticias
    );
}