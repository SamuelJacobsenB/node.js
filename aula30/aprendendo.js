const mongoose = require('mongoose');

// Configurando o Mongoose
    mongoose.connect('mongodb://localhost/aprendendo').then(()=>{
        console.log('MongoDB conectado...')
    }).catch((err)=>{
        console.log('Houve um erro ao se conectar ao mongoDB: '+err)
    });
    mongoose.Promise = global.Promise;
//Model - usuarios
//Definindo:
    const UsuarioSchema = mongoose.Schema({
        nome: {
            type: String,
            require: true
        },
        sobrenome: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        idade: {
            type: Number,
            require: true
        },
        pais: {
            type: String
        }
    });
// Collection
    mongoose.model('usuarios', UsuarioSchema)

const Samuel = mongoose.model('usuarios')

new Samuel({
    nome: 'Maria',
    sobrenome: 'Jacobsen',
    email: 'mariamail@mail.com',
    idade: 16,
    pais: 'Brasil'
}).save().then(()=>{
    console.log('Usuário criado com sucesso...')
}).catch((err)=>{
    console.log('Houve um erro:' + err)
})