'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Seasons', 
      [
        {
          year: '2017',
          yahooLeagueId: 836302,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          year: '2018',
          yahooLeagueId: 973781,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          year: '2019',
          yahooLeagueId: 204538,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], 
      {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Seasons', null, {});
  }
};
