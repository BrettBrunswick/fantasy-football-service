'use strict';
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: DataTypes.STRING,
  }, {});
  Team.associate = function(models) {
    Team.belongsTo(models.Manager);
  };
  return Team;
};