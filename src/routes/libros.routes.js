const {authJwt} = require('../middleware');
const controller = require('../controllers/libro.controller');

module.exports = (app) =>{
    
    // Configuracion de encabezado

    app.use(function(req,res,next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );

        next();
    })

    app.get('/api/libro',
    [authJwt.verifyToken],
    controller.get_book
    );

    app.post('/api/libro/guardar',
    [authJwt.verifyToken,authJwt.isAdmin],
    controller.create_book
    );

    app.get('/api/libro/:id',
    [authJwt.verifyToken,authJwt.isAdmin],
    controller.get_book_by_id
    );

    app.post('/api/libro/actualizar/:id',
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.update_book
    );

}