const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController.js')

router.get('/', tarefaController.listarTarefas);
router.post('/', tarefaController.criarTarefas);
router.put('/:id', tarefaController.atualizarTarefas);
router.delete('/:id', tarefaController.deletarTarefas);

module.exports = router;