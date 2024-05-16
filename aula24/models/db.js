const Sequelize = require('sequelize');
//Conecção com o Banco de Dados MySQL
const sequelize = new Sequelize('postapp', 'root', 'sjmb434718', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};