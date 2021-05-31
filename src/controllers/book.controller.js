const db = require('../models');
const config = require('../config/auth.config');
const Book = db.book;
const Op = db.sequelize.Op;

// Enlistar libros

exports.get_book = (req,res) =>{
    Book.findAll()
    .then(book =>{
        if(book == null){
            return res.status(200).send({message:'No existen registros'});
        }
        else{
            return res.status(200).send({message:book});
        }
    })
}

// Buscar libros por el nombre del libro

exports.get_book_by_id = (req,res) =>{
    Book.findOne()
    .then(book =>{
        if(book == null){
            return res.status(200).send({message:'No existen registros'});
        }
        else{
            return res.status(200).send({message:book});
        }
    })
}

// Buscar libros por el categoria

exports.get_book_by_category = (req,res) =>{
    Book.findAll({where:{categoria:req.params.categoria}})
    .then(book =>{
        if(book == null){
            return res.status(200).send({message:'No existen registros'});
        }
        else{
            return res.status(200).send({message:book});
        }
    })
}

// Borrar libros por el id

exports.delete_book = (req,res) =>{
    Book.delete({where:{nombre_usuario:req.params.nombre_usuario}})
    .then(book =>{
        if(book == null){
            return res.status(404).send({message:'Ese libro no existe'});
        }
        else{
            return res.status(200).send({message:'EL libro fue borrado satisfactoriamente'});
        }
    })
}