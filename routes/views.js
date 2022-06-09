const express=require('express');

const router=express.Router();

router.get('/',(req,res)=>{
    res.render('index.html');
});

router.get('/nuevoUsuario',(req,res)=>{
    res.render('nuevoUsuario.html');
});

module.exports= router;