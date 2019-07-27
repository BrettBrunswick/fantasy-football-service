'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Matchups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      homeTeamId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Teams',
          key: 'id',
          allowNull: false
        }
      },
      homeTeamScore: {
        type: Sequelize.DECIMAL
      },
      awayTeamId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Teams',
          key: 'id',
          allowNull: false
        }
      },
      awayTeamScore: {
        type: Sequelize.DECIMAL
      },
      winningTeamId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Teams',
          key: 'id',
          allowNull: true
        }
      },
      matchupTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'MatchupTypes',
          key: 'id',
          allowNull: false
        }
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
    return queryInterface.dropTable('Matchups');
  }
};