const models = require('../models');
const Sequelize = require('sequelize');

class ManagersRepository {

    static getAll() {
      return models.Manager.findAll();
    }
}

module.exports = ManagersRepository;