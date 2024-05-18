const mongoose = require('mongoose');

// Configurando o Mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/aprendendo', {useMongoClient: true}).then(()=>{
        console.log('MongoDB conectado...')
    }).catch((err)=>{
        console.log('Houve um erro ao se conectar ao mongoDB: '+err)
    });