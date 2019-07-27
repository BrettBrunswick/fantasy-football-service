'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Weeks', 
      [
        {
          week: '1',
          isPlayoffs: false,
          seasonId: 1,
          startDate: new Date('September 7, 2017 00:00:00'),
          endDate: new Date('September 11, 2017 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '2',
          isPlayoffs: false,
          seasonId: 1,
          startDate: new Date('September 12, 2017 00:00:00'),
          endDate: new Date('September 18, 2017 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '3',
          isPlayoffs: false,
          seasonId: 1,
          startDate: new Date('September 19, 2017 00:00:00'),
          endDate: new Date('September 25, 2017 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '4',
          isPlayoffs: false,
          seasonId: 1,
          startDate: new Date('September 26, 2017 00:00:00'),
          endDate: new Date('October 2, 2017 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '5',
          isPlayoffs: false,
          seasonId: 1,
          startDate: new Date('October 3, 2017 00:00:00'),
          endDate: new Date('October 9, 2017 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '6',
          isPlayoffs: false,
          seasonId: 1,
          startDate: new Date('October 10, 2017 00:00:00'),
          endDate: new Date('October 16, 2017 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '7',
          isPlayoffs: false,
          seasonId: 1,
          startDate: new Date('October 17, 2017 00:00:00'),
          endDate: new Date('October 23, 2017 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '8',
          isPlayoffs: false,
          seasonId: 1,
          startDate: new Date('October 24, 2017 00:00:00'),
          endDate: new Date('October 30, 2017 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '9',
          isPlayoffs: false,
          seasonId: 1,
          startDate: new Date('October 31, 2017 00:00:00'),
          endDate: new Date('November 6, 2017 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '10',
          isPlayoffs: false,
          seasonId: 1,
          startDate: new Date('November 7, 2017 00:00:00'),
          endDate: new Date('November 13, 2017 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '11',
          isPlayoffs: false,
          seasonId: 1,
          startDate: new Date('November 14, 2017 00:00:00'),
          endDate: new Date('November 20, 2017 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '12',
          isPlayoffs: false,
          seasonId: 1,
          startDate: new Date('November 21, 2017 00:00:00'),
          endDate: new Date('November 27, 2017 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '13',
          isPlayoffs: false,
          seasonId: 1,
          startDate: new Date('November 28, 2017 00:00:00'),
          endDate: new Date('December 4, 2017 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '14',
          isPlayoffs: false,
          seasonId: 1,
          startDate: new Date('December 5, 2017 00:00:00'),
          endDate: new Date('December 11, 2017 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '15',
          isPlayoffs: true,
          seasonId: 1,
          startDate: new Date('December 12, 2017 00:00:00'),
          endDate: new Date('December 18, 2017 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '16',
          isPlayoffs: true,
          seasonId: 1,
          startDate: new Date('December 19, 2017 00:00:00'),
          endDate: new Date('December 25, 2017 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '1',
          isPlayoffs: false,
          seasonId: 2,
          startDate: new Date('September 6, 2018 00:00:00'),
          endDate: new Date('September 10, 2018 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '2',
          isPlayoffs: false,
          seasonId: 2,
          startDate: new Date('September 11, 2018 00:00:00'),
          endDate: new Date('September 17, 2018 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '3',
          isPlayoffs: false,
          seasonId: 2,
          startDate: new Date('September 18, 2018 00:00:00'),
          endDate: new Date('September 24, 2018 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '4',
          isPlayoffs: false,
          seasonId: 2,
          startDate: new Date('September 25, 2018 00:00:00'),
          endDate: new Date('October 1, 2018 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '5',
          isPlayoffs: false,
          seasonId: 2,
          startDate: new Date('October 2, 2018 00:00:00'),
          endDate: new Date('October 8, 2018 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '6',
          isPlayoffs: false,
          seasonId: 2,
          startDate: new Date('October 9, 2018 00:00:00'),
          endDate: new Date('October 15, 2018 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '7',
          isPlayoffs: false,
          seasonId: 2,
          startDate: new Date('October 16, 2018 00:00:00'),
          endDate: new Date('October 22, 2018 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '8',
          isPlayoffs: false,
          seasonId: 2,
          startDate: new Date('October 23, 2018 00:00:00'),
          endDate: new Date('October 29, 2018 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '9',
          isPlayoffs: false,
          seasonId: 2,
          startDate: new Date('October 30, 2018 00:00:00'),
          endDate: new Date('November 5, 2018 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '10',
          isPlayoffs: false,
          seasonId: 2,
          startDate: new Date('November 6, 2018 00:00:00'),
          endDate: new Date('November 12, 2018 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '11',
          isPlayoffs: false,
          seasonId: 2,
          startDate: new Date('November 13, 2018 00:00:00'),
          endDate: new Date('November 19, 2018 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '12',
          isPlayoffs: false,
          seasonId: 2,
          startDate: new Date('November 20, 2018 00:00:00'),
          endDate: new Date('November 26, 2018 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '13',
          isPlayoffs: false,
          seasonId: 2,
          startDate: new Date('November 27, 2018 00:00:00'),
          endDate: new Date('December 3, 2018 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '14',
          isPlayoffs: false,
          seasonId: 2,
          startDate: new Date('December 4, 2018 00:00:00'),
          endDate: new Date('December 10, 2018 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '15',
          isPlayoffs: true,
          seasonId: 2,
          startDate: new Date('December 11, 2018 00:00:00'),
          endDate: new Date('December 17, 2018 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '16',
          isPlayoffs: true,
          seasonId: 2,
          startDate: new Date('December 18, 2018 00:00:00'),
          endDate: new Date('December 24, 2018 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '1',
          isPlayoffs: false,
          seasonId: 3,
          startDate: new Date('September 5, 2019 00:00:00'),
          endDate: new Date('September 9, 2019 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '2',
          isPlayoffs: false,
          seasonId: 3,
          startDate: new Date('September 10, 2019 00:00:00'),
          endDate: new Date('September 16, 2019 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '3',
          isPlayoffs: false,
          seasonId: 3,
          startDate: new Date('September 17, 2019 00:00:00'),
          endDate: new Date('September 23, 2019 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '4',
          isPlayoffs: false,
          seasonId: 3,
          startDate: new Date('September 24, 2019 00:00:00'),
          endDate: new Date('September 30, 2019 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '5',
          isPlayoffs: false,
          seasonId: 3,
          startDate: new Date('October 1, 2019 00:00:00'),
          endDate: new Date('October 7, 2019 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '6',
          isPlayoffs: false,
          seasonId: 3,
          startDate: new Date('October 8, 2019 00:00:00'),
          endDate: new Date('October 14, 2019 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '7',
          isPlayoffs: false,
          seasonId: 3,
          startDate: new Date('October 15, 2019 00:00:00'),
          endDate: new Date('October 21, 2019 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '8',
          isPlayoffs: false,
          seasonId: 3,
          startDate: new Date('October 22, 2019 00:00:00'),
          endDate: new Date('October 28, 2019 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '9',
          isPlayoffs: false,
          seasonId: 3,
          startDate: new Date('October 29, 2019 00:00:00'),
          endDate: new Date('November 4, 2019 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '10',
          isPlayoffs: false,
          seasonId: 3,
          startDate: new Date('November 5, 2019 00:00:00'),
          endDate: new Date('November 11, 2019 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '11',
          isPlayoffs: false,
          seasonId: 3,
          startDate: new Date('November 12, 2019 00:00:00'),
          endDate: new Date('November 18, 2019 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '12',
          isPlayoffs: false,
          seasonId: 3,
          startDate: new Date('November 19, 2019 00:00:00'),
          endDate: new Date('November 25, 2019 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '13',
          isPlayoffs: false,
          seasonId: 3,
          startDate: new Date('November 26, 2019 00:00:00'),
          endDate: new Date('December 2, 2019 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '14',
          isPlayoffs: false,
          seasonId: 3,
          startDate: new Date('December 3, 2019 00:00:00'),
          endDate: new Date('December 9, 2019 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '15',
          isPlayoffs: true,
          seasonId: 3,
          startDate: new Date('December 10, 2019 00:00:00'),
          endDate: new Date('December 16, 2019 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          week: '16',
          isPlayoffs: true,
          seasonId: 3,
          startDate: new Date('December 17, 2019 00:00:00'),
          endDate: new Date('December 23, 2019 00:00:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], 
      {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Weeks', null, {});
  }
};
