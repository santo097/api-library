module.exports = (sequelize, Sequelize) =>{
    const Noticias = sequelize.define("compra", {
        titulo:{
            type:Sequelize.STRING
        },
        noticia:{
            type:Sequelize.STRING
        }
    });

    return Noticias;
}