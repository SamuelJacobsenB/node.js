const express = require('express');
const app = express();
//-----------------------------------------------
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
//------------------------------------------------
const Post = require('./models/Post.js');
//Config
    //Template Engine
    app.engine('handlebars',handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
//Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
//Rotas
    app.get('/',(req,res)=>{
        Post.all({order: [['id','DESC']]}).then(function(posts){
            res.render('home', {posts: posts})
        });
    });

    app.get('/cad',(req,res)=>{
        res.render('formulario');
    });

    app.post('/add',(req,res)=>{
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(()=>{
            res.redirect('/')
        }).catch(()=>{
            res.send('Houve um erro: ' + erro)
        });
    });
//-------------------------------------------------

app.listen(2024,()=>{
    console.log('Servidor rodando...');
});