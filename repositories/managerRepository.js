const models = require('../models');
const Sequelize = require('sequelize');

class ManagersRepository {

    static getAll() {
      return models.Manager.findAll();
    }

    static getBySlackId(slackId) {
      return models.Manager.findAll({
        where: { slackId: slackId },
        attributes: ['id'],
        include: [{
          model: models.Team,
          attributes: ['id']
         }]
    }); 
  }
}

module.exports = ManagersRepository;