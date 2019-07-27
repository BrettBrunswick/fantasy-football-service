'use strict';
module.exports = (sequelize, DataTypes) => {
  const MatchupType = sequelize.define('MatchupType', {
    name: DataTypes.STRING
  }, {});
  MatchupType.associate = function(models) {
    MatchupType.belongsTo(models.Matchup);
  };
  return MatchupType;
};