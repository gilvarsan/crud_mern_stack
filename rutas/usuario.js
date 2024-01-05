const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const eschema = mongoose.Schema;

const eschemaUsuario = new eschema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
});

const modeloUsuario = mongoose.model('usuarios', eschemaUsuario);

//AGREGA UN USUARIO
router.post('/agregarusuario', async (req, res) => {
    const nuevousuario = new modeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    })

    try {
        const usuarioAgregado = await nuevousuario.save();
        console.log('usuarioAgregado', usuarioAgregado);
        res.send('Usuario agregado correctamente')
    } catch (error) {
        res.send(err)
    }
});

//OBTIENE TODOS LOS USUARIOS.
router.get('/obtenerusuarios', async (req, res) => {
    try {
        const docs = await modeloUsuario.find();
        //console.log('obtenerusuarios:', docs);
        res.send(docs);
    } catch (err) {
        console.log(err);
        // Aquí puedes manejar el error o enviar una respuesta adecuada
    }
});

//OBTIENE DATA DE USUARIO.
router.post('/obtenerdatosusuario', async (req, res) => {
    try {
        const docs = await modeloUsuario.find({idusuario: req.body.idusuario});
        //console.log('obtenerusuarios:', docs);
        res.send(docs);
    } catch (err) {
        console.log(err);
        // Aquí puedes manejar el error o enviar una respuesta adecuada
    }
});

//ACTUALIZAR UN USUARIO
router.post('/actualizarusuario', async (req, res) => {
    console.log('req.body', req.body);
    const actualizarusuario = {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono
    };    

    try {
        await modeloUsuario.findOneAndUpdate({idusuario: req.body.idusuario}, actualizarusuario);
        console.log('usuarioActualizado', actualizarusuario);
        res.send('Usuario Actualizado correctamente')
    } catch (error) {
        res.send(err)
    }
});

//BORRAR UN USUARIO
router.post('/borrarusuario', async (req, res) => {
    try {
        await modeloUsuario.findOneAndDelete({idusuario: req.body.idusuario});
        console.log('usuarioBorrado', req.body.idusuario);
        res.send('Usuario Borrado correctamente')
    } catch (error) {
        res.send(err)
    }
});

module.exports = router;