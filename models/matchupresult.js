'use strict';
module.exports = (sequelize, DataTypes) => {
  const MatchupResult = sequelize.define('MatchupResult', {
    score: DataTypes.DECIMAL,
    won: DataTypes.BOOLEAN
  }, {});
  MatchupResult.associate = function(models) {
    MatchupResult.belongsTo(models.Matchup);
    MatchupResult.belongsTo(models.Team);
  };
  return MatchupResult;
};