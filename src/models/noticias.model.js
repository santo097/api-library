module.exports = (sequelize, Sequelize) =>{
    const Noticias = sequelize.define("noticias", {
        titulo:{
            type:Sequelize.STRING
        },
        noticia:{
            type:Sequelize.STRING
        }
    });

    return Noticias;
}