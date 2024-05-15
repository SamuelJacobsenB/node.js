const express = require('express');
const app = express();
//-----------------------------------------------
const handlebars = require('express-handlebars');
//------------------------------------------------
const Sequelize = require('sequelize')
//------------------------------------------------
//Config
    //Template Engine
    app.engine('handlebars',handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
//Conecção com o Banco de Dados MySQL
    const sequelize = new Sequelize('teste', 'root', 'sjmb434718', {
        host: 'localhost',
        dialect: 'mysql'
    });
//Rotas
    app.get('/cad',(req,res)=>{
        res.render('formulario');
    });
//-------------------------------------------------

app.listen(2024,()=>{
    console.log('Servidor rodando...');
});