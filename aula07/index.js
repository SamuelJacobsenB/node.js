const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('Seja bem-vindo ao app...');
});

app.get('/sobre',(req,res)=>{
    res.send('Minha pagina SOBRE');
});

app.get('/blog',(req,res)=>{
    res.send('Meu blog');
});

app.listen(2024,()=>{console.log('Servidor rodando...')});