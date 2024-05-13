const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/html/index.html');
});

app.get('/sobre',(req,res)=>{
    res.sendFile(__dirname + '/html/sobre.html');
});

app.get('/blog',(req,res)=>{
    res.send('Meu blog');
});

app.get('/ola/:nome/:cargo/:cor',(req,res)=>{
    res.send('<h1>Beleza ' + req.params.nome + '</h1><br>'+'<h2>Seu cargo e: ' + req.params.cargo + '</h2><br>'+'<h3>Seu cor favorita e: ' + req.params.cor + '</h3>');
});

app.listen(2024,()=>{console.log('Servidor rodando...')});