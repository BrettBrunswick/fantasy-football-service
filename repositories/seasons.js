const models = require('../models');
const Sequelize = require('sequelize');

class SeasonsRepository {

    static getAll() {
          return models.Season.findAll({
            attributes: ['year']
          });
      }
}

module.exports = SeasonsRepository;