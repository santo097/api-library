module.exports = (sequelize, Sequelize) =>{
    const Compras = sequelize.define("compra", {
        id_usuario:{
            type:Sequelize.INTEGER
        },
        libro:{
            type:Sequelize.INTEGER
        },
        cantidad:{
            type:Sequelize.INTEGER
        }
    });

    return Compras;
}