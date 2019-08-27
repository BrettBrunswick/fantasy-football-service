const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


class SeasonsRepository {

    static getAll() {
      return models.Season.findAll({
        attributes: ['year']
      });
    }

    static getHeadToHeadSeasonsWithMatchups(team1Id, team2Id) {
      return models.Season.findAll({
        attributes: ['year'],
        include: [{
              model: models.Week,
              include: [{
                  model: models.Matchup,
                  where: {
                    [Op.or]: [
                      { HomeTeamId: team1Id, [Op.and]: {AwayTeamId: team2Id} },
                      { HomeTeamId: team2Id, [Op.and]: {AwayTeamId: team1Id} }
                    ]
                  },
                  attributes: ['id'],
                  required: true
                }
              ],
              attributes: ['id'],
              required: true
            }
        ]
    });
    }
}

module.exports = SeasonsRepository;