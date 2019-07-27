'use strict';
module.exports = (sequelize, DataTypes) => {
  const Matchup = sequelize.define('Matchup', {

  }, {});
  Matchup.associate = function(models) {
    Matchup.hasOne(models.Team, {as: 'homeTeamId'});
    Matchup.hasOne(models.Team, {as: 'awayTeamId'});
    Matchup.hasOne(models.MatchupType);
    Matchup.belongsTo(models.Week);
    Matchup.hasMany(models.MatchupResult);
  };
  return Matchup;
};