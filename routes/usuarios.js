const { response } = require('express');
const express = require('express');
const { model } = require('mongoose');
const Usuario = require('../models/Usuario');
const router = express.Router();
const Usuario = require('../models/Usuario');

//Funcion que se encarga de guardar el registro en la base de datos
async function registrarUsuario(usuario) {
    const usuarioRegistrado = await usuario.save();
    return usuarioRegistrado;
}

//Funcion que se encarga de generar el codigo de los nuevos registros
async function generarCodigo() {
    var ultimoUsuario = await Usuario.findOne().sort({ IdUsuario: -1 });

    if (ultimoUsuario == null) {
        return 1;
    }

    return Number(ultimoUsuario.IdUsuario) + 1;
}

//Funcion para validar el Usuario
async function validarUsuario(usuario, isUpdate) {
    var response = {};

    if (isUpdate) {
        if (usuario.IdUsuario == undefined) {
            response.Success = false;
            response.Message = "El ID de Usuario es un dato requerido";
            return response;
        }
    }

    if (usuario.NombreUsuario == undefined) {
        response.Success = false;
        response.Message = "El Nombre de Usuario es un dato requerido";
        return response;
    }

    response.Success = true;
    return response;
}

router.post('/api/usuarios', (req,res)=>{
    var usuario=req.body;

    validarUsuario(usuario).then(response =>{

        if(response.Success){
            generarCodigo().then(ID =>{
                const nuevoUsuario = new Usuario({
                    IdUsuario: ID,
                    NombreUsuario: usuario.NombreUsuario,
                    ContraseñaUsuario: usuario.ContraseñaUsuario
                });

                registrarUsuario(nuevoUsuario).then(usuarioRegistrado =>{
                    response.Data=usuarioRegistrado;
                    response.Message="Datos Guardados";

                    res.json(response);
                });
            });
        }
        else{
            res.json(response);
        }
    })
});

router.put('/api/usuarios',(req,res)=>{
    var usuario=req.body;
    
    validarCliente(usuario,true).then(response =>{

        if(response.Success){
            Usuario.findOne({ IdUsuario: usuario.IdUsuario})
                .then(doc => {
                    doc.NombreUsuario= usuario.NombreUsuario;
                    doc.ContraseñaUsuario= usuario.ContraseñaUsuario;

                    doc.save().then(doc=>{
                        response.Data=doc;
                        response.Message="Datos Actualizados"

                        res.json(response);
                    })

                })
        }
        else{
            res.json(response);
        }

    })

});
module.exports=router;