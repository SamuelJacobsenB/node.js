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

    app.get('/404',(req,res)=>{
        res.send('Erro 404!')
    });

    app.use('/admin',admin);
// outros
const PORT = 2024;
app.listen(PORT,()=>{
    console.log('Servidor rodando...');
});