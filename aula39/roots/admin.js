const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/Categoria.js');
const Categoria = mongoose.model('categorias');


router.get('/',(req,res)=>{
    res.render('admin/index')
});

router.get('/posts',(req,res)=>{
    res.send('Página Posts.');
});

router.get('/categorias',(req,res)=>{
    res.render('admin/categorias');
});

router.get('/categorias/add',(req,res)=>{
    res.render('admin/addcategorias');
});

router.post('/categorias/nova',(req,res)=>{
    const novaCategoria = {
        nome: req.body.nome,
        slug: req.body.slug
    };

    new Categoria(novaCategoria).save().then(()=>{
        console.log('Categoria salva');
    }).catch((err)=>{
        console.log('Erro ao salvar');
    });
});

module.exports = router;