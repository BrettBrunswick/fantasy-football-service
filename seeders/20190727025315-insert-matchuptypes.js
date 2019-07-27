'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('MatchupTypes', 
      [
        {
          name: 'Regular Season',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Semifinal',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Championship',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Consolation',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], 
      {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('MatchupTypes', null, {});
  }
};
