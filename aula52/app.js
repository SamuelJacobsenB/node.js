//Carregando módulos
    const express = require('express');
    const expressHandlebars = require('express-handlebars');
    const Handlebars = require('handlebars');
    const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
    const bodyParser = require('body-parser');
    const app = express();
    const admin = require('./routes/admin.js');
    const path = require('path');
    const mongoose = require('mongoose');
    const session = require('express-session');
    const flash = require('connect-flash');
    require('./models/Postagem.js');
    const Postagem = mongoose.model('postagens');
    require('./models/Categoria.js');
    const Categoria = mongoose.model('categorias');
// Configurações
    // Sessão
        app.use(session({
            secret: 'cursodenode',
            resave: true,
            saveUninitialized: true
        }));
        app.use(flash());
    // Middleware
        app.use((req,res,next)=>{
            res.locals.success_msg = req.flash('success_msg');
            res.locals.error_msg = req.flash('error_msg');
            next();
        });
    // Body-parser
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());
    // Handlebars
    app.engine('handlebars', expressHandlebars.engine({
        handlebars: allowInsecurePrototypeAccess(Handlebars),
        defaultLayout: 'main'
    }));
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
    app.get('/',(req,res)=>{
        Postagem.find().populate('categoria').sort({data: 'desc'}).then((postagens)=>{
            res.render('index',{postagens: postagens});
        }).catch((err)=>{
            req.flash('error_msg','Houve um erro interno');
            res.redirect('/404');
        });
    });

    app.get('/postagem/:slug',(req,res)=>{
        Postagem.findOne({slug: req.params.slug}).then((postagem)=>{
            if(postagem){
                res.render('postagem/index',{postagem: postagem});
            } else {
                req.flash('error_msg','Esta postagem não existe');
                res.redirect('/');
            };
        }).catch((err)=>{
            req.flash('error_msg','Houve um erro interno');
            res.redirect('/');
        });
    });

    app.get('/categorias',(req,res)=>{
        Categoria.find().then((categorias)=>{
            res.render('categorias/index',{categorias: categorias})
        }).catch((err)=>{
            req.flash('error_msg','Houve um erro interno ao listar as categorias');
            res.redirect('/')
        })
    });

    app.get('/categorias/:slug',(req,res)=>{
        Categoria.findOne({slug: req.params.slug}).then((categoria)=>{
            if(categoria){
                Postagem.find({categoria: categoria._id}).then((postagens)=>{
                    res.render('categorias/postagens',{postagens: postagens, categoria: categoria});
                }).catch((err)=>{
                    req.flash('error_msg','Houve um erro ao listar os posts');
                    res.redirect('/');
                })
            } else {
                req.flash('error_msg','Esta categoria não existe');
                res.redirect('/');
            }
        }).catch((err)=>{
            req.flash('error_msg','Houve um erro interno ao carregar a página desta categoria');
            res.redirect('/');
        });
    });

    app.get('/404',(req,res)=>{
        res.send('Erro 404!')
    });

    app.use('/admin',admin);
// outros
const PORT = 2024;
app.listen(PORT,()=>{
    console.log('Servidor rodando...');
});