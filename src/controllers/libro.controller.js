const db = require('../models');
const Book = db.book;
const Op = db.sequelize.Op;

// Enlistar libros

exports.get_book = (req,res) =>{
    Book.findAll()
    .then(book =>{
        if(book == null){
            return res.status(404).send({message:'No existen registros'});
        }
        else{
            return res.status(200).send(book);
        }
    })
}

// Buscar libros por el nombre del libro

exports.get_book_by_id = (req,res) =>{
    Book.findOne({where:{id:req.params.id}})
    .then(book =>{
        if(book == null){
            return res.status(200).send({message:'No existen registros'});
        }
        else{
            return res.status(200).send(book);
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
            return res.status(200).send(book);
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

exports.create_book = (req,res) =>{
    Book.create({
        titulo:req.body.titulo,
        autor:req.body.autor,
        año_publicacion:req.body.año_publicacion,
        genero:req.body.genero,
        num_paginas:req.body.num_paginas,
        editorial:req.body.editorial,
        issn:req.body.issn,
        idioma:req.body.idioma,
        estado:req.body.estado,
        usuario:req.body.usuario,
        reserva:req.body.reserva,
        cantidad:req.body.cantidad,
    })
    .then(libro =>{
        return res.status(200).send({message:'¡Libro registrado! '+libro});
    })
}

exports.update_book = (req,res) =>{
    Book.update({
        titulo:req.body.titulo,
        autor:req.body.autor,
        año_publicacion:req.body.año_publicacion,
        genero:req.body.genero,
        num_paginas:req.body.num_paginas,
        editorial:req.body.editorial,
        issn:req.body.issn,
        idioma:req.body.idioma,
        estado:req.body.estado,
        usuario:req.body.usuario,
        reserva:req.body.reserva,
        cantidad:req.body.cantidad,
    },
      {
        where:{id:req.params.id}
      })
      .then(libro =>{
        return res.status(200).send({message:'Actualizado correctamente'});
      })
}