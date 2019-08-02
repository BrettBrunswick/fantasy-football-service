const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class MatchupResultsRepository {

    static getHeadToHeadResults(teamId1, teamId2, matchupIds) {
          return models.MatchupResult.findAll({
            where: {
                TeamId: {
                    [Op.in]: [teamId1, teamId2]
                },
                MatchupId: {
                    [Op.in]: matchupIds
                },
              },
              order: ['TeamId'],
              raw: true,
              attributes: [
                  'TeamId',
                  'won',
                  'score'
              ]
          });
      }
}

module.exports = MatchupResultsRepository;