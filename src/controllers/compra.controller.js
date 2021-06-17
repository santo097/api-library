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
            Reserva.findOne({where:{id_usuario:req.params.id_usuario, id:req.body.id}})
            .then(reserva =>{
                if(reserva == null){
                    return res.status(404).send({message:'No existe la reserva'});
                }
                else{
                    return res.status(300).send({message:'Stand by'});
                }
            })
        } 
    })
}