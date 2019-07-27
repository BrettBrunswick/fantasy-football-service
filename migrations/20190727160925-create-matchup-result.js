'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MatchupResults', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      matchupId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Matchups',
          key: 'id',
          allowNull: false
        }
      },
      teamId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Teams',
          key: 'id',
          allowNull: false
        }
      },
      score: {
        type: Sequelize.DECIMAL
      },
      won: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MatchupResults');
  }
};