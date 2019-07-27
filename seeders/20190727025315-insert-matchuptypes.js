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
          name: '3rd Place Game',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Semifinal Consolation',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '5th Place Game',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '7th Place Game',
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
