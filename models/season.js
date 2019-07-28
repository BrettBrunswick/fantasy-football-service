'use strict';
module.exports = (sequelize, DataTypes) => {
  const Season = sequelize.define('Season', {
    year: DataTypes.STRING,
    yahooLeagueId: DataTypes.INTEGER
  }, {});
  Season.associate = function(models) {
    
  };
  return Season;
};