module.exports = (sequelize, Sequelize) =>{
    const Reserva = sequelize.define("reservas", {
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

    return Reserva;
}