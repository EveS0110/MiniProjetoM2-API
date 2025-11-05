//criando um modelo para a categoria seguindo a documentação do Sequelize


const {DataTypes} = require('sequelize');
const sequelize = require('../config/database.js');

const Categoria = sequelize.define('Categoria', {
    firstName: {
        titulo: DataTypes.STRING,
        allowNull:false
    }
});

module.export = Categoria;