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
          ['SeasonId', 'ASC'],
          ['week', 'ASC']
        ],
        attributes: ['id'],
        raw: true
      })
      .then(weekIds => {
        queryInterface.bulkInsert('Matchups',
        [
          // 2017 Week 1
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: caelanTeamId,
            WeekId: weekIds[0].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: johnTeamId,
            AwayTeamId: brandonTeamId,
            WeekId: weekIds[0].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: benTeamId,
            AwayTeamId: calebTeamId,
            WeekId: weekIds[0].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: joeyTeamId,
            AwayTeamId: samTeamId,
            WeekId: weekIds[0].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: devinTeamId,
            AwayTeamId: keginTeamId,
            WeekId: weekIds[0].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 2
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: johnTeamId,
            WeekId: weekIds[1].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: caelanTeamId,
            AwayTeamId: keginTeamId,
            WeekId: weekIds[1].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: benTeamId,
            AwayTeamId: brandonTeamId,
            WeekId: weekIds[1].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: joeyTeamId,
            AwayTeamId: calebTeamId,
            WeekId: weekIds[1].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: devinTeamId,
            AwayTeamId: samTeamId,
            WeekId: weekIds[1].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 3
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: benTeamId,
            WeekId: weekIds[2].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: caelanTeamId,
            AwayTeamId: johnTeamId,
            WeekId: weekIds[2].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: joeyTeamId,
            AwayTeamId: brandonTeamId,
            WeekId: weekIds[2].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: devinTeamId,
            AwayTeamId: calebTeamId,
            WeekId: weekIds[2].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: keginTeamId,
            AwayTeamId: samTeamId,
            WeekId: weekIds[2].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 4
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: joeyTeamId,
            WeekId: weekIds[3].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: caelanTeamId,
            AwayTeamId: benTeamId,
            WeekId: weekIds[3].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: johnTeamId,
            AwayTeamId: keginTeamId,
            WeekId: weekIds[3].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: devinTeamId,
            AwayTeamId: brandonTeamId,
            WeekId: weekIds[3].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: calebTeamId,
            AwayTeamId: samTeamId,
            WeekId: weekIds[3].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 5
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: devinTeamId,
            WeekId: weekIds[4].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: caelanTeamId,
            AwayTeamId: joeyTeamId,
            WeekId: weekIds[4].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: johnTeamId,
            AwayTeamId: benTeamId,
            WeekId: weekIds[4].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: samTeamId,
            AwayTeamId: brandonTeamId,
            WeekId: weekIds[4].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: keginTeamId,
            AwayTeamId: calebTeamId,
            WeekId: weekIds[4].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 6
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: samTeamId,
            WeekId: weekIds[5].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: caelanTeamId,
            AwayTeamId: devinTeamId,
            WeekId: weekIds[5].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: joeyTeamId,
            AwayTeamId: johnTeamId,
            WeekId: weekIds[5].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: benTeamId,
            AwayTeamId: keginTeamId,
            WeekId: weekIds[5].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: calebTeamId,
            AwayTeamId: brandonTeamId,
            WeekId: weekIds[5].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 7
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: calebTeamId,
            WeekId: weekIds[6].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: caelanTeamId,
            AwayTeamId: samTeamId,
            WeekId: weekIds[6].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: johnTeamId,
            AwayTeamId: devinTeamId,
            WeekId: weekIds[6].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: benTeamId,
            AwayTeamId: joeyTeamId,
            WeekId: weekIds[6].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: keginTeamId,
            AwayTeamId: brandonTeamId,
            WeekId: weekIds[6].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 8
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: brandonTeamId,
            WeekId: weekIds[7].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: caelanTeamId,
            AwayTeamId: calebTeamId,
            WeekId: weekIds[7].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: johnTeamId,
            AwayTeamId: samTeamId,
            WeekId: weekIds[7].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: devinTeamId,
            AwayTeamId: benTeamId,
            WeekId: weekIds[7].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: keginTeamId,
            AwayTeamId: joeyTeamId,
            WeekId: weekIds[7].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 9
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: keginTeamId,
            WeekId: weekIds[8].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: caelanTeamId,
            AwayTeamId: brandonTeamId,
            WeekId: weekIds[8].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: johnTeamId,
            AwayTeamId: calebTeamId,
            WeekId: weekIds[8].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: benTeamId,
            AwayTeamId: samTeamId,
            WeekId: weekIds[8].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: joeyTeamId,
            AwayTeamId: devinTeamId,
            WeekId: weekIds[8].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 10
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: caelanTeamId,
            WeekId: weekIds[9].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: johnTeamId,
            AwayTeamId: brandonTeamId,
            WeekId: weekIds[9].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: benTeamId,
            AwayTeamId: calebTeamId,
            WeekId: weekIds[9].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: joeyTeamId,
            AwayTeamId: samTeamId,
            WeekId: weekIds[9].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: devinTeamId,
            AwayTeamId: keginTeamId,
            WeekId: weekIds[9].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 11
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: johnTeamId,
            WeekId: weekIds[10].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: caelanTeamId,
            AwayTeamId: keginTeamId,
            WeekId: weekIds[10].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: benTeamId,
            AwayTeamId: brandonTeamId,
            WeekId: weekIds[10].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: joeyTeamId,
            AwayTeamId: calebTeamId,
            WeekId: weekIds[10].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: devinTeamId,
            AwayTeamId: samTeamId,
            WeekId: weekIds[10].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 12
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: benTeamId,
            WeekId: weekIds[11].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: caelanTeamId,
            AwayTeamId: johnTeamId,
            WeekId: weekIds[11].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: joeyTeamId,
            AwayTeamId: brandonTeamId,
            WeekId: weekIds[11].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: devinTeamId,
            AwayTeamId: calebTeamId,
            WeekId: weekIds[11].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: keginTeamId,
            AwayTeamId: samTeamId,
            WeekId: weekIds[11].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 13
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: joeyTeamId,
            WeekId: weekIds[12].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: caelanTeamId,
            AwayTeamId: benTeamId,
            WeekId: weekIds[12].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: johnTeamId,
            AwayTeamId: keginTeamId,
            WeekId: weekIds[12].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: devinTeamId,
            AwayTeamId: brandonTeamId,
            WeekId: weekIds[12].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: calebTeamId,
            AwayTeamId: samTeamId,
            WeekId: weekIds[12].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 14
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: devinTeamId,
            WeekId: weekIds[13].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: caelanTeamId,
            AwayTeamId: joeyTeamId,
            WeekId: weekIds[13].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: johnTeamId,
            AwayTeamId: benTeamId,
            WeekId: weekIds[13].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: samTeamId,
            AwayTeamId: brandonTeamId,
            WeekId: weekIds[13].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: keginTeamId,
            AwayTeamId: calebTeamId,
            WeekId: weekIds[13].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 15
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: benTeamId,
            WeekId: weekIds[14].id,
            MatchupTypeId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: devinTeamId,
            AwayTeamId: calebTeamId,
            WeekId: weekIds[14].id,
            MatchupTypeId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: samTeamId,
            AwayTeamId: brandonTeamId,
            WeekId: weekIds[14].id,
            MatchupTypeId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: caelanTeamId,
            AwayTeamId: johnTeamId,
            WeekId: weekIds[14].id,
            MatchupTypeId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2017 Week 16
          {
            HomeTeamId: benTeamId,
            AwayTeamId: calebTeamId,
            WeekId: weekIds[15].id,
            MatchupTypeId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: devinTeamId,
            AwayTeamId: brettTeamId,
            WeekId: weekIds[15].id,
            MatchupTypeId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: samTeamId,
            AwayTeamId: johnTeamId,
            WeekId: weekIds[15].id,
            MatchupTypeId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: caelanTeamId,
            AwayTeamId: brandonTeamId,
            WeekId: weekIds[15].id,
            MatchupTypeId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 1
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: caelanTeamId,
            WeekId: weekIds[16].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: johnTeamId,
            AwayTeamId: cjTeamId,
            WeekId: weekIds[16].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: benTeamId,
            AwayTeamId: samTeamId,
            WeekId: weekIds[16].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: joeyTeamId,
            AwayTeamId: jeffTeamId,
            WeekId: weekIds[16].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: flickTeamId,
            AwayTeamId: nickTeamId,
            WeekId: weekIds[16].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 2
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: johnTeamId,
            WeekId: weekIds[17].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: caelanTeamId,
            AwayTeamId: nickTeamId,
            WeekId: weekIds[17].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: benTeamId,
            AwayTeamId: cjTeamId,
            WeekId: weekIds[17].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: joeyTeamId,
            AwayTeamId: samTeamId,
            WeekId: weekIds[17].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: jeffTeamId,
            AwayTeamId: flickTeamId,
            WeekId: weekIds[17].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 3
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: benTeamId,
            WeekId: weekIds[18].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: johnTeamId,
            AwayTeamId: caelanTeamId,
            WeekId: weekIds[18].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: joeyTeamId,
            AwayTeamId: cjTeamId,
            WeekId: weekIds[18].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: flickTeamId,
            AwayTeamId: samTeamId,
            WeekId: weekIds[18].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: jeffTeamId,
            AwayTeamId: nickTeamId,
            WeekId: weekIds[18].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 4
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: joeyTeamId,
            WeekId: weekIds[19].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: caelanTeamId,
            AwayTeamId: benTeamId,
            WeekId: weekIds[19].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: johnTeamId,
            AwayTeamId: nickTeamId,
            WeekId: weekIds[19].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: flickTeamId,
            AwayTeamId: cjTeamId,
            WeekId: weekIds[19].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: jeffTeamId,
            AwayTeamId: samTeamId,
            WeekId: weekIds[19].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 5
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: flickTeamId,
            WeekId: weekIds[20].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: caelanTeamId,
            AwayTeamId: joeyTeamId,
            WeekId: weekIds[20].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: benTeamId,
            AwayTeamId: johnTeamId,
            WeekId: weekIds[20].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: cjTeamId,
            AwayTeamId: jeffTeamId,
            WeekId: weekIds[20].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: samTeamId,
            AwayTeamId: nickTeamId,
            WeekId: weekIds[20].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 6
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: jeffTeamId,
            WeekId: weekIds[21].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: caelanTeamId,
            AwayTeamId: flickTeamId,
            WeekId: weekIds[21].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: joeyTeamId,
            AwayTeamId: johnTeamId,
            WeekId: weekIds[21].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: benTeamId,
            AwayTeamId: nickTeamId,
            WeekId: weekIds[21].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: samTeamId,
            AwayTeamId: cjTeamId,
            WeekId: weekIds[21].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 7
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: samTeamId,
            WeekId: weekIds[22].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: caelanTeamId,
            AwayTeamId: jeffTeamId,
            WeekId: weekIds[22].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: flickTeamId,
            AwayTeamId: johnTeamId,
            WeekId: weekIds[22].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: benTeamId,
            AwayTeamId: joeyTeamId,
            WeekId: weekIds[22].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: cjTeamId,
            AwayTeamId: nickTeamId,
            WeekId: weekIds[22].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 8
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: cjTeamId,
            WeekId: weekIds[23].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: caelanTeamId,
            AwayTeamId: samTeamId,
            WeekId: weekIds[23].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: jeffTeamId,
            AwayTeamId: johnTeamId,
            WeekId: weekIds[23].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: benTeamId,
            AwayTeamId: flickTeamId,
            WeekId: weekIds[23].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: joeyTeamId,
            AwayTeamId: nickTeamId,
            WeekId: weekIds[23].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 9
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: nickTeamId,
            WeekId: weekIds[24].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: caelanTeamId,
            AwayTeamId: cjTeamId,
            WeekId: weekIds[24].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: johnTeamId,
            AwayTeamId: samTeamId,
            WeekId: weekIds[24].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: benTeamId,
            AwayTeamId: jeffTeamId,
            WeekId: weekIds[24].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: joeyTeamId,
            AwayTeamId: flickTeamId,
            WeekId: weekIds[24].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 10
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: caelanTeamId,
            WeekId: weekIds[25].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: johnTeamId,
            AwayTeamId: cjTeamId,
            WeekId: weekIds[25].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: benTeamId,
            AwayTeamId: samTeamId,
            WeekId: weekIds[25].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: joeyTeamId,
            AwayTeamId: jeffTeamId,
            WeekId: weekIds[25].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: flickTeamId,
            AwayTeamId: nickTeamId,
            WeekId: weekIds[25].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 11
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: johnTeamId,
            WeekId: weekIds[26].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: caelanTeamId,
            AwayTeamId: nickTeamId,
            WeekId: weekIds[26].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: benTeamId,
            AwayTeamId: cjTeamId,
            WeekId: weekIds[26].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: joeyTeamId,
            AwayTeamId: samTeamId,
            WeekId: weekIds[26].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: jeffTeamId,
            AwayTeamId: flickTeamId,
            WeekId: weekIds[26].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 12
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: benTeamId,
            WeekId: weekIds[27].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: johnTeamId,
            AwayTeamId: caelanTeamId,
            WeekId: weekIds[27].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: joeyTeamId,
            AwayTeamId: cjTeamId,
            WeekId: weekIds[27].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: flickTeamId,
            AwayTeamId: samTeamId,
            WeekId: weekIds[27].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: jeffTeamId,
            AwayTeamId: nickTeamId,
            WeekId: weekIds[27].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 13
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: joeyTeamId,
            WeekId: weekIds[28].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: caelanTeamId,
            AwayTeamId: benTeamId,
            WeekId: weekIds[28].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: johnTeamId,
            AwayTeamId: nickTeamId,
            WeekId: weekIds[28].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: flickTeamId,
            AwayTeamId: cjTeamId,
            WeekId: weekIds[28].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: jeffTeamId,
            AwayTeamId: samTeamId,
            WeekId: weekIds[28].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 14
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: flickTeamId,
            WeekId: weekIds[29].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: caelanTeamId,
            AwayTeamId: joeyTeamId,
            WeekId: weekIds[29].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: benTeamId,
            AwayTeamId: johnTeamId,
            WeekId: weekIds[29].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: cjTeamId,
            AwayTeamId: jeffTeamId,
            WeekId: weekIds[29].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: samTeamId,
            AwayTeamId: nickTeamId,
            WeekId: weekIds[29].id,
            MatchupTypeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 15
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: samTeamId,
            WeekId: weekIds[30].id,
            MatchupTypeId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: jeffTeamId,
            AwayTeamId: caelanTeamId,
            WeekId: weekIds[30].id,
            MatchupTypeId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: benTeamId,
            AwayTeamId: flickTeamId,
            WeekId: weekIds[30].id,
            MatchupTypeId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: johnTeamId,
            AwayTeamId: joeyTeamId,
            WeekId: weekIds[30].id,
            MatchupTypeId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          // 2018 Week 16
          {
            HomeTeamId: brettTeamId,
            AwayTeamId: jeffTeamId,
            WeekId: weekIds[31].id,
            MatchupTypeId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: samTeamId,
            AwayTeamId: caelanTeamId,
            WeekId: weekIds[31].id,
            MatchupTypeId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: benTeamId,
            AwayTeamId: joeyTeamId,
            WeekId: weekIds[31].id,
            MatchupTypeId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            HomeTeamId: flickTeamId,
            AwayTeamId: johnTeamId,
            WeekId: weekIds[31].id,
            MatchupTypeId: 4,
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