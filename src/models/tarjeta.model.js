module.exports = (sequelize, Sequelize) =>{
    const Tarjeta = sequelize.define("tarjeta", {
        id_usuario:{
            type:Sequelize.INTEGER
        },
        nombre_propietario:{
            type:Sequelize.STRING
        },
        numero_tarjeta:{
            type:Sequelize.INTEGER
        },
        fecha_vencimiento:{
            type:Sequelize.DATE
        },
        codigo_seguridad:{
            type:Sequelize.INTEGER
        }
    });

    return Tarjeta;
}