'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('categories', [
       {
        name: 'Pessoal',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
         name: 'Trabalho',
         createdAt: new Date(),
         updatedAt: new Date()
       }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('categories', null, {});
  }
};
