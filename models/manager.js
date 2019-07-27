'use strict';
module.exports = (sequelize, DataTypes) => {
  const Manager = sequelize.define('Manager', {
    name: DataTypes.STRING,
    slackId: DataTypes.STRING
  }, {});
  Manager.associate = function(models) {
    Manager.hasOne(models.Team);
  };
  return Manager;
};