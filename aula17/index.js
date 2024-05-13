const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Seja bem-vindo ao meu app!!!')
})

app.get('/sobre',(req,res)=>{
    res.send('Minha pag sobre...')
})

app.get('/blog',(req,res)=>{
    res.send('Seja bem-vindo ao meu blog!')
})

app.get('/livedeteste',(req,res)=>{
    res.send('BIRL!')
})

app.get('/rotaDeTeste',(req,res)=>{
    res.send('HAHAHAHA')
})

app.listen(2024,()=>{
    console.log('Servidor rodando...');
});