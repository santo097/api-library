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

// Reserva para los usuarios

exports.mostrarReservaUsuarios = (req,res) =>{
    Usuario.findOne({where:{id:req.params.id_usuario}})
    .then(usuario =>{
        if(usuario == null){
            console.log(usuario);
            return res.status(200).send({message:'No existe el usuario'});
        }
        else{
            Reserva.findAll({where:{id_usuario:req.params.id_usuario}})
            .then(reserva =>{
                if(reserva == null){
                    console.log(reserva);
                    return res.status(200).send({message:'No existe reserva'});
                }
                else{
                    return res.status(200).send(reserva);
                }
            })
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
                    libro.cantidad = libro.cantidad - req.body.cantidad;
                    Book.update({
                        cantidad:libro.cantidad
                    },{
                        where:{titulo:req.body.libro}
                    })
                    .then(libro =>{
                        Reserva.create({
                            id_usuario:req.body.id_usuario,
                            libro:req.body.libro,
                            cantidad:req.body.cantidad,
                            estado:true
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
