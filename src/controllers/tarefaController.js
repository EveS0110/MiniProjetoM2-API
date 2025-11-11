const { Sequelize, DataTypes } = require('sequelize');

// Caminho do banco
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

// Importa o model de tarefa e inicializa ele
const TarefaModel = require('../models/tarefa');
const Tarefa = TarefaModel(sequelize, DataTypes); // usei uma IA para me ajudar fazer essa importação

// Listar tarefas
exports.listarTarefas = async (req, res) => {
  try {
    const tarefas = await Tarefa.findAll();
    res.status(200).json(tarefas);
  } catch (error) {
    console.log("erro ao listar tarefas", error)
    res.status(500).json({ erro: "Erro ao listar tarefas" });
  }
};

// Criar tarefa
exports.criarTarefas = async (req, res) => {
  try {
    const { titulo, descricao, status, data_limite } = req.body;
    if(!titulo || titulo.trim() ==="") {
      return res.status(400).json({erro: "O título não pode ser vazio!"})
    }
    if(!status || status.trim() === "") {
      return res.status(400).json({erro: "Status não pode ser vazio!"})
    }

    const novaTarefa = await Tarefa.create({ titulo, descricao, status, data_limite });
    res.status(201).json(novaTarefa);
  } catch (error) {
    console.log("erro ao criar tarefas", error)
    res.status(500).json({ erro: "Erro ao criar tarefa" });
  }
};

// Atualizar tarefa
exports.atualizarTarefas = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descricao, status, data_limite } = req.body;

    const tarefa = await Tarefa.findByPk(id);
    if (!tarefa) {
      return res.status(404).json({ erro: "Tarefa não encontrada" });
    }

    await tarefa.update({ titulo, descricao, status, data_limite });
    res.status(200).json({ message: "Tarefa atualizada com sucesso!", tarefa });
  } catch (erro) {
    res.status(500).json({ erro: "Erro ao atualizar tarefa." });
  }
};

// Deletar tarefa
exports.deletarTarefas = async (req, res) => {
  try {
    const { id } = req.params;
    const tarefa = await Tarefa.findByPk(id);
    if (!tarefa) {
      return res.status(404).json({ erro: "Tarefa não encontrada." });
    }

    await tarefa.destroy();
    res.status(200).json({ message: "Tarefa excluída com sucesso!" });
  } catch (erro) {
    res.status(500).json({ erro: "Erro ao excluir tarefa." });
  }
};
