//criando um modelo para as tarefas a partir da documentação do Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Categoria = require('./categoriaModel.js');

const Tarefa = sequelize.define('Tarefa', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: DataTypes.TEXT,
    status: {
        type: DataTypes.STRING,
        defaultValue: 'pendente'
    },
    data_criacao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    data_limite: DataTypes.DATE,
    horario: DataTypes.TIME

});

//definido o relacionamento entre as duas tabelas
Categoria.hasMany(Tarefa, { foreigkey: 'categoria_id'});
Tarefa.belongsTo(Categoria,{ foreignKey: 'categoria_id'});

module.exports = Tarefa;
