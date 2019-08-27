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
        include: [
            { 
              model: models.Team,
              attributes: ['name'],
              include: [{
                model: models.Manager,
                attributes: ['slackId']
              }]
            }
        ],
        order: ['TeamId'],
        attributes: ['TeamId', 'won', 'score']
      });
    }

    static getIndividualResults(teamId, matchupIds) {
      return models.MatchupResult.findAll({
        where: {
            TeamId: teamId,
            MatchupId: {
                [Op.in]: matchupIds
            },
          },
        include: [
            { 
              model: models.Team,
              attributes: ['name']
            }
        ],
        attributes: ['TeamId', 'won', 'score']
      });
    }
}

module.exports = MatchupResultsRepository;