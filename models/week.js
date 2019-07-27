'use strict';
module.exports = (sequelize, DataTypes) => {
  const Week = sequelize.define('Week', {
    week: DataTypes.INTEGER,
    isPlayoffs: DataTypes.BOOLEAN
  }, {});
  Week.associate = function(models) {
    Week.hasMany(models.WeeklyResults);
    Week.belongsTo(models.Season);
  };
  return Week;
};