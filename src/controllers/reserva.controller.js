const db = require('../models');
const Reserva = db.reserva;
const Usuario = db.user;
const Book = db.book;
// Enlistar

exports.mostrarReserva = (req,res) =>{
    Reserva.findAll()
    .then(reserva =>{
        if(reserva == null){
            return res.status(404).send({message:'No existen registros'});
        }
        else{
            return res.status(200).send(reserva);
        }
    })
}

// Buscar reserva por id

exports.mostrarReservaPorId = (req,res) =>{
    Reserva.findOne({where:{id:req.params.id}})
    .then(reserva =>{
        if(reserva == null){
            return res.status(404).send({message:'No existen registros'});
        }
        else{
            return res.status(200).send({message:reserva});
        }
    })
}

// Borrar por el id

exports.borrarReserva = (req,res) =>{
    Reserva.delete({where:{id:req.params.id}})
    .then(reserva =>{
        if(reserva == null){
            return res.status(404).send({message:'No existen registros'});
        }
        else{
            return res.status(200).send({message:'El libro fue borrado'});
        }
    })
}

// Crear reserva

exports.crearReserva = (req,res) =>{
    Usuario.findOne({where:{id:req.body.id_usuario}})
    .then(usuario =>{
        if(usuario == null){
            return res.status(404).send({message:'No existe el usuario'});
        }
        else{
            Book.findOne({where:{titulo:req.body.libro}})
            .then(libro =>{
                if(libro == null){
                    return res.status(404).send({message:'No existe el libro'});
                }
                else{
                    libro.cantidad = libro.cantidad - 1;
                    Book.update({
                        cantidad:libro.cantidad
                    },{
                        where:{titulo:req.body.libro}
                    })
                    .then(libro =>{
                        Reserva.create({
                            id_usuario:req.body.id_usuario,
                            libro:req.body.libro,
                            cantidad:req.body.cantidad
                        })
                        .then(reserva =>{
                            return res.status(200).send({message:'La reserva fue agregada'});
                        })
                    })
                }
            })
        }
    })
}
