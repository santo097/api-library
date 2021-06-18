const { noticias } = require('../models');
const db = require('../models');
const Noticias = db.noticias;

exports.mostrarNoticias = (req,res) =>{
    Noticias.findAll()
    .then(noticias =>{
        if(noticias == null){
            return res.status(404).send({message:'No existen registros'});
        }
        else{
            return res.status(200).send(noticias);
        }
    })
}

exports.guardarNoticias = (req,res) =>{
    Noticias.create({
        titulo:req.body.titulo,
        noticia:req.body.noticia
    })
    .then(noticias =>{
        return res.status(200).send({message:'Noticia agregada'});
    })
}