const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class MatchupsRepository {

  static getAll() {
    return models.Matchup.findAll();
  }

  static getById(id) {
    return models.Matchup.findAll({
        where: { id: id }
    });
  }

  static getAllInWeek(weekId) {
    return models.Matchup.findAll({
        where: {
            WeekId: weekId
        },
        attributes: [],
        include: [{
            model: models.Week,
            attributes: ['week', 'isPlayoffs'],
        },
        {
            model: models.Team, as: 'HomeTeam',
            attributes: ['id', 'name'],
            include: [{
                model: models.Manager,
                attributes: ['name', 'slackId']
            }]
        },
        {
            model: models.Team, as: 'AwayTeam',
            attributes: ['id', 'name'],
            include: [{
                model: models.Manager,
                attributes: ['name', 'slackId']
            }]
        }]
    });
  }

  static getIdsInWeeks(weekIds) {
    return models.Matchup.findAll({
        where: {
            WeekId: weekIds
        },
        attributes: ['id']
    })
  }

  static getAllForTeam(teamId, weekIds = null) {
      if (weekIds != null) {
        return models.Matchup.findAll({
            where: {
                [Op.or]: [{HomeTeamId: teamId}, {AwayTeamId: teamId}]
            }
        });
      } else {
        return models.Matchup.findAll({
            where: {
                [Op.or]: [{HomeTeamId: teamId}, {AwayTeamId: teamId}],
                WeekId: weekIds
            }
        });
      }
    }

    static getHeadToHeadMatchupIds(team1Id, team2Id, weekIds = null) {
        if (weekIds == null) {
          return models.Matchup.findAll({
              where: {
                  [Op.or]: [
                      { HomeTeamId: team1Id, [Op.and]: {AwayTeamId: team2Id} },
                      { HomeTeamId: team2Id, [Op.and]: {AwayTeamId: team1Id} }
                   ]
              },
              attributes: ['id'],
              include: [{
                model: models.Team, as: 'HomeTeam',
                attributes: ['id', 'name']
              },
              {
                model: models.Team, as: 'AwayTeam',
                attributes: ['id', 'name']
              }]
          });
        } else {
            return models.Matchup.findAll({
                where: {
                    WeekId: weekIds,
                    [Op.or]: [
                        { HomeTeamId: team1Id, [Op.and]: {AwayTeamId: team2Id} },
                        { HomeTeamId: team2Id, [Op.and]: {AwayTeamId: team1Id} }
                     ]
                },
                attributes: ['id'],
                include: [{
                    model: models.Team, as: 'HomeTeam',
                    attributes: ['id', 'name']
                  },
                  {
                    model: models.Team, as: 'AwayTeam',
                    attributes: ['id', 'name']
                  }]
            });
        }
      }

      static async getLastHeadToHeadMatchup(team1Id, team2Id) {
        var recentMatchups = await models.Matchup.findAll({
            where: {
                [Op.or]: [
                    { HomeTeamId: team1Id, [Op.and]: {AwayTeamId: team2Id} },
                    { HomeTeamId: team2Id, [Op.and]: {AwayTeamId: team1Id} }
                  ]
            },
            attributes: ['id',  'WeekId', 'MatchupTypeId'],
            include: [
              {
                model: models.Week,
                attributes: ['week'],
                include: [{
                  model: models.Season,
                  attributes: ['year'],
                  }
                ],
              },
              {
                model: models.MatchupType,
                attributes: ['name']
              },
              {
                model: models.MatchupResult,
                attributes: ['TeamId', 'won', 'score'],
                include:[{
                  model: models.Team,
                  attributes: ['name']
                }]
              }
            ],
            order: [ 
              [ models.Week, models.Season, 'year', 'DESC' ],
              [ models.Week, 'week', 'DESC' ]
            ]        
          });

        return recentMatchups[0];
    }

    static getIndividualMatchupIds(teamId, weekIds = null) {
      if (weekIds == null) {
        return models.Matchup.findAll({
            where: {
                [Op.or]: [
                    { HomeTeamId: teamId },
                    { AwayTeamId: teamId }
                 ]
            },
            attributes: ['id']
        });
      } else {
          return models.Matchup.findAll({
            WeekId: weekIds,
            where: {
              [Op.or]: [
                  { HomeTeamId: teamId },
                  { AwayTeamId: teamId }
               ]
            },
            attributes: ['id'],
              include: [{
                  model: models.Team, as: 'HomeTeam',
                  attributes: ['id', 'name']
                },
                {
                  model: models.Team, as: 'AwayTeam',
                  attributes: ['id', 'name']
                }]
          });
      }
    }
    
}

module.exports = MatchupsRepository;