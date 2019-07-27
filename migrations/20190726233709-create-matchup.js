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
      awayTeamId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Teams',
          key: 'id',
          allowNull: false
        }
      },
      weekId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Weeks',
          key: 'id',
          allowNull: false
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