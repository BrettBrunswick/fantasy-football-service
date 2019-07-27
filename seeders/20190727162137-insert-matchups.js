'use strict';
const models = require('../models');
const Week = models.Week;

const benTeamId = 1;
const flickTeamId = 2;
const brettTeamId = 3;
const cjTeamId = 4;
const samTeamId = 5;
const johnTeamId = 6;
const caelanTeamId = 7;
const nickTeamId = 8;
const joeyTeamId = 9;
const jeffTeamId = 10;
const calebTeamId = 11;
const devinTeamId = 12;
const brandonTeamId = 13;
const keginTeamId = 14;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return new Promise((resolve, reject) => {
      Week.findAll({
        order: [
          ['seasonId', 'ASC'],
          ['week', 'ASC']
        ],
        attributes: ['id'],
        raw: true
      })
      .then(weekIds => {
        console.log(weekIds)
        queryInterface.bulkInsert('Matchups',
        [
          // 2017 Week 1
          {
            homeTeamId: brettTeamId,
            awayTeamId: caelanTeamId,
            weekId: weekIds[0].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: johnTeamId,
            awayTeamId: brandonTeamId,
            weekId: weekIds[0].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: benTeamId,
            awayTeamId: calebTeamId,
            weekId: weekIds[0].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: joeyTeamId,
            awayTeamId: samTeamId,
            weekId: weekIds[0].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: devinTeamId,
            awayTeamId: keginTeamId,
            weekId: weekIds[0].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 2
          {
            homeTeamId: brettTeamId,
            awayTeamId: johnTeamId,
            weekId: weekIds[1].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: caelanTeamId,
            awayTeamId: keginTeamId,
            weekId: weekIds[1].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: benTeamId,
            awayTeamId: brandonTeamId,
            weekId: weekIds[1].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: joeyTeamId,
            awayTeamId: calebTeamId,
            weekId: weekIds[1].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: devinTeamId,
            awayTeamId: samTeamId,
            weekId: weekIds[1].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 3
          {
            homeTeamId: brettTeamId,
            awayTeamId: benTeamId,
            weekId: weekIds[2].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: caelanTeamId,
            awayTeamId: johnTeamId,
            weekId: weekIds[2].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: joeyTeamId,
            awayTeamId: brandonTeamId,
            weekId: weekIds[2].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: devinTeamId,
            awayTeamId: calebTeamId,
            weekId: weekIds[2].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: keginTeamId,
            awayTeamId: samTeamId,
            weekId: weekIds[2].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 4
          {
            homeTeamId: brettTeamId,
            awayTeamId: joeyTeamId,
            weekId: weekIds[3].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: caelanTeamId,
            awayTeamId: benTeamId,
            weekId: weekIds[3].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: johnTeamId,
            awayTeamId: keginTeamId,
            weekId: weekIds[3].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: devinTeamId,
            awayTeamId: brandonTeamId,
            weekId: weekIds[3].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: calebTeamId,
            awayTeamId: samTeamId,
            weekId: weekIds[3].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 5
          {
            homeTeamId: brettTeamId,
            awayTeamId: devinTeamId,
            weekId: weekIds[4].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: caelanTeamId,
            awayTeamId: joeyTeamId,
            weekId: weekIds[4].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: johnTeamId,
            awayTeamId: benTeamId,
            weekId: weekIds[4].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: samTeamId,
            awayTeamId: brandonTeamId,
            weekId: weekIds[4].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: keginTeamId,
            awayTeamId: calebTeamId,
            weekId: weekIds[4].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 6
          {
            homeTeamId: brettTeamId,
            awayTeamId: samTeamId,
            weekId: weekIds[5].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: caelanTeamId,
            awayTeamId: devinTeamId,
            weekId: weekIds[5].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: joeyTeamId,
            awayTeamId: johnTeamId,
            weekId: weekIds[5].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: benTeamId,
            awayTeamId: keginTeamId,
            weekId: weekIds[5].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: calebTeamId,
            awayTeamId: brandonTeamId,
            weekId: weekIds[5].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 7
          {
            homeTeamId: brettTeamId,
            awayTeamId: calebTeamId,
            weekId: weekIds[6].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: caelanTeamId,
            awayTeamId: samTeamId,
            weekId: weekIds[6].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: johnTeamId,
            awayTeamId: devinTeamId,
            weekId: weekIds[6].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: benTeamId,
            awayTeamId: joeyTeamId,
            weekId: weekIds[6].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: keginTeamId,
            awayTeamId: brandonTeamId,
            weekId: weekIds[6].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 8
          {
            homeTeamId: brettTeamId,
            awayTeamId: brandonTeamId,
            weekId: weekIds[7].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: caelanTeamId,
            awayTeamId: calebTeamId,
            weekId: weekIds[7].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: johnTeamId,
            awayTeamId: samTeamId,
            weekId: weekIds[7].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: devinTeamId,
            awayTeamId: benTeamId,
            weekId: weekIds[7].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: keginTeamId,
            awayTeamId: joeyTeamId,
            weekId: weekIds[7].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 9
          {
            homeTeamId: brettTeamId,
            awayTeamId: keginTeamId,
            weekId: weekIds[8].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: caelanTeamId,
            awayTeamId: brandonTeamId,
            weekId: weekIds[8].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: joeyTeamId,
            awayTeamId: calebTeamId,
            weekId: weekIds[8].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: benTeamId,
            awayTeamId: samTeamId,
            weekId: weekIds[8].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: joeyTeamId,
            awayTeamId: devinTeamId,
            weekId: weekIds[8].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 10
          {
            homeTeamId: brettTeamId,
            awayTeamId: caelanTeamId,
            weekId: weekIds[9].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: johnTeamId,
            awayTeamId: brandonTeamId,
            weekId: weekIds[9].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: benTeamId,
            awayTeamId: calebTeamId,
            weekId: weekIds[9].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: joeyTeamId,
            awayTeamId: samTeamId,
            weekId: weekIds[9].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: devinTeamId,
            awayTeamId: keginTeamId,
            weekId: weekIds[9].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 11
          {
            homeTeamId: brettTeamId,
            awayTeamId: johnTeamId,
            weekId: weekIds[10].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: caelanTeamId,
            awayTeamId: keginTeamId,
            weekId: weekIds[10].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: benTeamId,
            awayTeamId: brandonTeamId,
            weekId: weekIds[10].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: joeyTeamId,
            awayTeamId: calebTeamId,
            weekId: weekIds[10].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: devinTeamId,
            awayTeamId: samTeamId,
            weekId: weekIds[10].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 12
          {
            homeTeamId: brettTeamId,
            awayTeamId: benTeamId,
            weekId: weekIds[11].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: caelanTeamId,
            awayTeamId: johnTeamId,
            weekId: weekIds[11].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: joeyTeamId,
            awayTeamId: brandonTeamId,
            weekId: weekIds[11].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: devinTeamId,
            awayTeamId: calebTeamId,
            weekId: weekIds[11].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: keginTeamId,
            awayTeamId: samTeamId,
            weekId: weekIds[11].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 13
          {
            homeTeamId: brettTeamId,
            awayTeamId: joeyTeamId,
            weekId: weekIds[12].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: caelanTeamId,
            awayTeamId: benTeamId,
            weekId: weekIds[12].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: johnTeamId,
            awayTeamId: keginTeamId,
            weekId: weekIds[12].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: devinTeamId,
            awayTeamId: brandonTeamId,
            weekId: weekIds[12].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: calebTeamId,
            awayTeamId: samTeamId,
            weekId: weekIds[12].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 14
          {
            homeTeamId: brettTeamId,
            awayTeamId: devinTeamId,
            weekId: weekIds[13].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: caelanTeamId,
            awayTeamId: joeyTeamId,
            weekId: weekIds[13].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: johnTeamId,
            awayTeamId: benTeamId,
            weekId: weekIds[13].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: samTeamId,
            awayTeamId: brandonTeamId,
            weekId: weekIds[13].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: keginTeamId,
            awayTeamId: calebTeamId,
            weekId: weekIds[13].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 15
          {
            homeTeamId: brettTeamId,
            awayTeamId: benTeamId,
            weekId: weekIds[14].id,
            matchupTypeId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: devinTeamId,
            awayTeamId: calebTeamId,
            weekId: weekIds[14].id,
            matchupTypeId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: samTeamId,
            awayTeamId: brandonTeamId,
            weekId: weekIds[14].id,
            matchupTypeId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: caelanTeamId,
            awayTeamId: johnTeamId,
            weekId: weekIds[14].id,
            matchupTypeId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 16
          {
            homeTeamId: benTeamId,
            awayTeamId: calebTeamId,
            weekId: weekIds[15].id,
            matchupTypeId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: devinTeamId,
            awayTeamId: brettTeamId,
            weekId: weekIds[15].id,
            matchupTypeId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: samTeamId,
            awayTeamId: johnTeamId,
            weekId: weekIds[15].id,
            matchupTypeId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: caelanTeamId,
            awayTeamId: brandonTeamId,
            weekId: weekIds[15].id,
            matchupTypeId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 1
          {
            homeTeamId: brettTeamId,
            awayTeamId: caelanTeamId,
            weekId: weekIds[16].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: johnTeamId,
            awayTeamId: cjTeamId,
            weekId: weekIds[16].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: benTeamId,
            awayTeamId: samTeamId,
            weekId: weekIds[16].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: joeyTeamId,
            awayTeamId: jeffTeamId,
            weekId: weekIds[16].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: flickTeamId,
            awayTeamId: nickTeamId,
            weekId: weekIds[16].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 2
          {
            homeTeamId: brettTeamId,
            awayTeamId: johnTeamId,
            weekId: weekIds[17].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: caelanTeamId,
            awayTeamId: nickTeamId,
            weekId: weekIds[17].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: benTeamId,
            awayTeamId: cjTeamId,
            weekId: weekIds[17].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: joeyTeamId,
            awayTeamId: samTeamId,
            weekId: weekIds[17].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: jeffTeamId,
            awayTeamId: flickTeamId,
            weekId: weekIds[17].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 3
          {
            homeTeamId: brettTeamId,
            awayTeamId: benTeamId,
            weekId: weekIds[18].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: johnTeamId,
            awayTeamId: caelanTeamId,
            weekId: weekIds[18].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: joeyTeamId,
            awayTeamId: cjTeamId,
            weekId: weekIds[18].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: flickTeamId,
            awayTeamId: samTeamId,
            weekId: weekIds[18].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: jeffTeamId,
            awayTeamId: nickTeamId,
            weekId: weekIds[18].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 4
          {
            homeTeamId: brettTeamId,
            awayTeamId: joeyTeamId,
            weekId: weekIds[19].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: caelanTeamId,
            awayTeamId: benTeamId,
            weekId: weekIds[19].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: johnTeamId,
            awayTeamId: nickTeamId,
            weekId: weekIds[19].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: flickTeamId,
            awayTeamId: cjTeamId,
            weekId: weekIds[19].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: jeffTeamId,
            awayTeamId: samTeamId,
            weekId: weekIds[19].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 5
          {
            homeTeamId: brettTeamId,
            awayTeamId: flickTeamId,
            weekId: weekIds[20].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: caelanTeamId,
            awayTeamId: joeyTeamId,
            weekId: weekIds[20].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: benTeamId,
            awayTeamId: johnTeamId,
            weekId: weekIds[20].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: cjTeamId,
            awayTeamId: jeffTeamId,
            weekId: weekIds[20].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: samTeamId,
            awayTeamId: nickTeamId,
            weekId: weekIds[20].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 6
          {
            homeTeamId: brettTeamId,
            awayTeamId: jeffTeamId,
            weekId: weekIds[21].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: caelanTeamId,
            awayTeamId: flickTeamId,
            weekId: weekIds[21].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: joeyTeamId,
            awayTeamId: johnTeamId,
            weekId: weekIds[21].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: benTeamId,
            awayTeamId: nickTeamId,
            weekId: weekIds[21].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: samTeamId,
            awayTeamId: cjTeamId,
            weekId: weekIds[21].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 7
          {
            homeTeamId: brettTeamId,
            awayTeamId: samTeamId,
            weekId: weekIds[22].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: caelanTeamId,
            awayTeamId: jeffTeamId,
            weekId: weekIds[22].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: flickTeamId,
            awayTeamId: johnTeamId,
            weekId: weekIds[22].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: benTeamId,
            awayTeamId: joeyTeamId,
            weekId: weekIds[22].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: cjTeamId,
            awayTeamId: nickTeamId,
            weekId: weekIds[22].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 8
          {
            homeTeamId: brettTeamId,
            awayTeamId: cjTeamId,
            weekId: weekIds[23].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: caelanTeamId,
            awayTeamId: samTeamId,
            weekId: weekIds[23].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: jeffTeamId,
            awayTeamId: johnTeamId,
            weekId: weekIds[23].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: benTeamId,
            awayTeamId: flickTeamId,
            weekId: weekIds[23].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: joeyTeamId,
            awayTeamId: nickTeamId,
            weekId: weekIds[23].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 9
          {
            homeTeamId: brettTeamId,
            awayTeamId: nickTeamId,
            weekId: weekIds[24].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: caelanTeamId,
            awayTeamId: cjTeamId,
            weekId: weekIds[24].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: johnTeamId,
            awayTeamId: samTeamId,
            weekId: weekIds[24].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: benTeamId,
            awayTeamId: jeffTeamId,
            weekId: weekIds[24].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: joeyTeamId,
            awayTeamId: flickTeamId,
            weekId: weekIds[24].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 10
          {
            homeTeamId: brettTeamId,
            awayTeamId: caelanTeamId,
            weekId: weekIds[25].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: johnTeamId,
            awayTeamId: cjTeamId,
            weekId: weekIds[25].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: benTeamId,
            awayTeamId: samTeamId,
            weekId: weekIds[25].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: joeyTeamId,
            awayTeamId: jeffTeamId,
            weekId: weekIds[25].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: flickTeamId,
            awayTeamId: nickTeamId,
            weekId: weekIds[25].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 11
          {
            homeTeamId: brettTeamId,
            awayTeamId: johnTeamId,
            weekId: weekIds[26].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: caelanTeamId,
            awayTeamId: nickTeamId,
            weekId: weekIds[26].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: benTeamId,
            awayTeamId: cjTeamId,
            weekId: weekIds[26].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: joeyTeamId,
            awayTeamId: samTeamId,
            weekId: weekIds[26].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: jeffTeamId,
            awayTeamId: flickTeamId,
            weekId: weekIds[26].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 12
          {
            homeTeamId: brettTeamId,
            awayTeamId: benTeamId,
            weekId: weekIds[27].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: johnTeamId,
            awayTeamId: caelanTeamId,
            weekId: weekIds[27].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: joeyTeamId,
            awayTeamId: cjTeamId,
            weekId: weekIds[27].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: flickTeamId,
            awayTeamId: samTeamId,
            weekId: weekIds[27].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: jeffTeamId,
            awayTeamId: nickTeamId,
            weekId: weekIds[27].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 13
          {
            homeTeamId: brettTeamId,
            awayTeamId: joeyTeamId,
            weekId: weekIds[28].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: caelanTeamId,
            awayTeamId: benTeamId,
            weekId: weekIds[28].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: johnTeamId,
            awayTeamId: nickTeamId,
            weekId: weekIds[28].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: flickTeamId,
            awayTeamId: cjTeamId,
            weekId: weekIds[28].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: jeffTeamId,
            awayTeamId: samTeamId,
            weekId: weekIds[28].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 14
          {
            homeTeamId: brettTeamId,
            awayTeamId: flickTeamId,
            weekId: weekIds[29].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: caelanTeamId,
            awayTeamId: joeyTeamId,
            weekId: weekIds[29].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: benTeamId,
            awayTeamId: johnTeamId,
            weekId: weekIds[29].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: cjTeamId,
            awayTeamId: jeffTeamId,
            weekId: weekIds[29].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: samTeamId,
            awayTeamId: nickTeamId,
            weekId: weekIds[29].id,
            matchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 15
          {
            homeTeamId: brettTeamId,
            awayTeamId: samTeamId,
            weekId: weekIds[30].id,
            matchupTypeId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: jeffTeamId,
            awayTeamId: caelanTeamId,
            weekId: weekIds[30].id,
            matchupTypeId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: benTeamId,
            awayTeamId: flickTeamId,
            weekId: weekIds[30].id,
            matchupTypeId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: johnTeamId,
            awayTeamId: joeyTeamId,
            weekId: weekIds[30].id,
            matchupTypeId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 16
          {
            homeTeamId: brettTeamId,
            awayTeamId: jeffTeamId,
            weekId: weekIds[31].id,
            matchupTypeId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: samTeamId,
            awayTeamId: caelanTeamId,
            weekId: weekIds[31].id,
            matchupTypeId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: benTeamId,
            awayTeamId: joeyTeamId,
            weekId: weekIds[31].id,
            matchupTypeId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            homeTeamId: flickTeamId,
            awayTeamId: johnTeamId,
            weekId: weekIds[31].id,
            matchupTypeId: 4,
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
    await queryInterface.bulkDelete('Matchups', null, {});
  }
};