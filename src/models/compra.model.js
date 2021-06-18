module.exports = (sequelize, Sequelize) =>{
    const Compras = sequelize.define("compras", {
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

    return Compras;
}