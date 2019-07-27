'use strict';
module.exports = (sequelize, DataTypes) => {
  const Matchup = sequelize.define('Matchup', {
    homeTeamScore: DataTypes.DECIMAL,
    awayTeamScore: DataTypes.DECIMAL
  }, {});
  Matchup.associate = function(models) {
    Matchup.hasOne(models.Team, {as: 'homeTeamId'});
    Matchup.hasOne(models.Team, {as: 'awayTeamId'});
    Matchup.hasOne(models.Team, {as: 'winningTeamId'});
    Matchup.belongsTo(models.MatchupType);
    Matchup.belongsTo(models.Week);
  };
  return Matchup;
};