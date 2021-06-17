module.exports = (sequelize, Sequelize) =>{
    const Compras = sequelize.define("compra", {
        id_usuario:{
            type:Sequelize.INTEGER
        },
        id_reserva:{
            type:Sequelize.INTEGER
        },
        id_libro:{
            type:Sequelize.INTEGER
        }
    });

    return Compras;
}