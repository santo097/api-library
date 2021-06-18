const db = require('../models');
const Compra = db.compras;
const Usuario = db.user;
const Libro = db.book;
const Reserva = db.reserva;

exports.mostrarCompras = (req,res) =>{
    Compra.findAll()
    .then(compra =>{
        if(compra == null){
            return res.status(404).send({message:'No existen compras'});
        }
        else{
            return res.status(200).send(compra)
        }
    })
}
exports.mostrarComprasUsuario = (req,res) =>{
    Usuario.findOne({where:{id:req.params.id_usuario}})
    .then(usuario =>{
        if(usuario == null){
            return res.status(404).send({message:'No existe el usuario'});
        }
        else{
            Compra.findAll({where:{id_usuario:req.params.id_usuario}})
            .then(compra =>{
                if(compra == null){
                    return res.status(404).send({message:'No existen compras'});
                }
                else{
                    return res.status(200).send(compra);
                }
            })
        }
    })
}


exports.guardarCompra = (req,res) =>{
    Usuario.findOne({where:{id:req.params.id_usuario}})
    .then(usuario =>{
        if(usuario == null){
            return res.status(404).send({message:'No existe el usuario'});
        }
        else{
            Libro.findOne({where:{titulo:req.body.libro}})
            .then(libro =>{
                if(libro == null){
                    return res.status(404).send({message:'No existe el libro'});
                }
                else{
                    libro.cantidad = libro.cantidad - req.body.cantidad;
                    Libro.update({
                        cantidad:libro.cantidad
                    },{
                        where:{titulo:req.body.libro}
                    })
                    .then(libro =>{
                        Compra.create({
                            id_usuario:req.body.id_usuario,
                            libro:req.body.libro,
                            cantidad:req.body.cantidad
                        })
                        .then(compra =>{
                            return res.status(200).send({message:'Compra realizada'});
                        })
                    })
                }
            })
        }
    })
}