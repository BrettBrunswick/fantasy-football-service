'use strict';
module.exports = (sequelize, DataTypes) => {
  const Matchup = sequelize.define('Matchup', {

  }, {});
  Matchup.associate = function(models) {
    Matchup.belongsTo(models.Team, {as: 'HomeTeam'});
    Matchup.belongsTo(models.Team, {as: 'AwayTeam'});
    Matchup.belongsTo(models.MatchupType);
  };
  return Matchup;
};