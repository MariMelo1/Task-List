'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
   
      await queryInterface.bulkInsert('users', [{
        name: 'Victor',
        email: 'victor@tasklist.com',
        password: 'tasklist@2021',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('users', null, {}); 
  }
};
