const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) =>{
    const Book = sequelize.define("book", {
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true
        },
        nombre:{
            type:Sequelize.STRING
        }
    })
}