const express = require('express');
const app = express();
//-----------------------------------------------
const handlebars = require('express-handlebars');
//------------------------------------------------
const Sequelize = require('sequelize')
//Conecção com o Banco de Dados MySQL
const sequelize = new Sequelize('teste', 'root', 'sjmb434718', {
    host: 'localhost',
    dialect: 'mysql'
})

//------------------------------------------------

//Config
    //Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

//-------------------------------------------------

app.listen(2024,()=>{
    console.log('Servidor rodando...');
});