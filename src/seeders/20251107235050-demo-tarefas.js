'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Inserindo tarefas no banco de dados
    await queryInterface.bulkInsert('Tarefas', [
      {
        titulo: 'Finalizar relatório do projeto',
        descricao: 'Concluir o relatório mensal e enviar para o gestor.',
        status: 'pendente',
        data_limite: new Date('2025-11-10'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Estudar Sequelize',
        descricao: 'Revisar migrations, models e seeders.',
        status: 'em andamento',
        data_limite: new Date('2025-11-15'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Ir à academia',
        descricao: 'Treino de perna e abdômen.',
        status: 'pendente',
        data_limite: new Date('2025-11-08'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tarefas', null, {});
  }
};
