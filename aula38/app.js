//Carregando módulos
    const express = require('express');
    const handlebars = require('express-handlebars');
    const bodyParser = require('body-parser');
    const app = express();
    const admin = require('./roots/admin.js');
    const path = require('path');
    const mongoose = require('mongoose');
// Configurações
    // Body-parser
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());
    // Handlebars
        app.engine('handlebars',handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine','handlebars');
    // Mongoose
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://localhost/blogapp').then(()=>{
            console.log('Conectado...');
        }).catch((err)=>{
            console.log('Erro ao conectar-se: ' + err);
        });
    // Public
        app.use(express.static(path.join(__dirname,'public')));

        app.use((req,res,next)=>{
            console.log('Eu sou um middleware');
            next();
        });
    //
// Rotas
    app.use('/admin',admin);
// outros
const PORT = 2024;
app.listen(PORT,()=>{
    console.log('Servidor rodando...');
});