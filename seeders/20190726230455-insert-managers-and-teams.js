'use strict';
const models = require('../models');
const Manager = models.Manager;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Managers',
      [
        {
          name: 'Ben',
          slackId: 'benpalme',
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
          slackId: 'brettbrun',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'CJ',
          slackId: 'cjdavis2013',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Sam',
          slackId: 'sampalmer111',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'john',
          slackId: 'jkramer315',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Caelan',
          slackId: 'king_caelan',
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
          slackId: 'obrienj1993',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Jeff',
          slackId: 'hall2jg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'CalebS',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Devin',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Brandon',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Kegin',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Kyle',
          slackId: 'kglaser38',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Tyler',
          slackId: 'tylerjeichhorn',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});

    return new Promise((resolve, reject) => {
      Manager.findAll({
        order: [
          ['id', 'ASC']
        ],
        attributes: ['id'],
        raw: true
      })
      .then(managerIds => {
        queryInterface.bulkInsert('Teams',
        [
          {
            name: 'Brunswick Modzzz',
            ManagerId: managerIds[0].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Bye Week',
            ManagerId: managerIds[1].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Dalton Dynasty',
            ManagerId: managerIds[2].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Dubstep Brett',
            ManagerId: managerIds[3].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'I Wentz Off On You',
            ManagerId: managerIds[4].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Joey Mixon\'s Jabby\'s',
            ManagerId: managerIds[5].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Michael Havetree',
            ManagerId: managerIds[6].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Nick\'s Team',
            ManagerId: managerIds[7].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: '🅱️urfict Players',
            ManagerId: managerIds[8].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Christian McHavefrey',
            ManagerId: managerIds[9].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Skip Obriens 💩Takes',
            ManagerId: managerIds[10].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Pacmans Punches',
            ManagerId: managerIds[11].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Brandon\'s Bong Rips',
            ManagerId: managerIds[12].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Kegin\'s Team',
            ManagerId: managerIds[13].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'The BOAT',
            ManagerId: managerIds[14].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'I have a Chubb',
            ManagerId: managerIds[15].id,
            createdAt: new Date(),
            updatedAt: new Date()
          },
        ]);

        resolve('Done');
      })
      .catch((error) => {
        console.error(error);
        reject(error)
      });
    }, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Teams', null, {});
    return await queryInterface.bulkDelete('Managers', null, {});
  }
};