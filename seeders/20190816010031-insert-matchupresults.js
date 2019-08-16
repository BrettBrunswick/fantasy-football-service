'use strict';

var matchupResults = require('./data/matchupResults.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MatchupResults', 
    matchupResults, 
    {});
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('MatchupResults', null, {});
  }
};
