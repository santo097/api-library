const db = require('../models');
const Tarjeta = db.tarjeta;
const Usuario = db.user;
// Mostrar tarjetas del usuario

exports.mostrarTarjeta = (req,res) =>{
    Tarjeta.findAll({where:{id_usuario:req.params.id_usuario}})
    .then(tarjeta =>{
        return res.status(200).send(tarjeta);
    })
}

// Guardar tarjetas del usuario

exports.guardarTarjeta = (req,res) =>{
    Usuario.findOne({where: {id:req.body.id_usuario}})
    .then(usuario =>{
        if(usuario == null){
            return res.status(404).send({message:'No existen registros'});
        }
        else{
            Tarjeta.create({
                id_usuario:req.body.id_usuario,
                nombre_propietario:req.body.nombre_propietario,
                numero_tarjeta:req.body.numero_tarjeta,
                fecha_vencimiento:req.body.fecha_vencimiento,
                codigo_seguridad:req.body.codigo_seguridad
            })
            .then(tarjeta =>{
                return res.status(200).send({message:'Tarjeta guardada'})
            });
        }
    })
}
