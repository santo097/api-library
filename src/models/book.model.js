module.exports = (sequelize, Sequelize) =>{
    const Libro = sequelize.define("libro", {
        titulo:{
            type:Sequelize.STRING
        },
        autor:{
            type:Sequelize.STRING,
        },
        año_publicacion:{
            type:Sequelize.STRING
        },
        genero:{
            type:Sequelize.STRING
        },
        num_paginas:{
            type:Sequelize.INTEGER
        },
        editorial:{
            type:Sequelize.STRING
        },
        issn:{
            type:Sequelize.STRING
        },
        idioma:{
            type:Sequelize.STRING
        },
        estado:{
            type:Sequelize.BOOLEAN
        },
        cantidad:{
            type:Sequelize.INTEGER
        }
    });

    return Libro;
}