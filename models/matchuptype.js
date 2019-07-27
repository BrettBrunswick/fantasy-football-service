'use strict';
module.exports = (sequelize, DataTypes) => {
  const MatchupType = sequelize.define('MatchupType', {
    name: DataTypes.STRING
  }, {});
  MatchupType.associate = function(models) {
    // associations can be defined here
  };
  return MatchupType;
};