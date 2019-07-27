'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Managers',
    [
      {
        name: 'Ben',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Flick',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'brett',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CJ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'john',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Caelan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nick',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Joey',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jeff',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Managers', null, {});
  }
};