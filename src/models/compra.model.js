module.exports = (sequelize, Sequelize) =>{
    const Compra = sequelize.define("compras", {
        id_usuario:{
            type:Sequelize.INTEGER
        },
        libro:{
            type:Sequelize.STRING
        },
        cantidad:{
            type:Sequelize.INTEGER
        }
    });

    return Compra;
}