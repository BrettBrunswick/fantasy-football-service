'use strict';
module.exports = (sequelize, DataTypes) => {
  const Week = sequelize.define('Week', {
    week: DataTypes.INTEGER,
    isPlayoffs: DataTypes.BOOLEAN,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {});
  Week.associate = function(models) {
    Week.hasMany(models.Matchup);
    Week.belongsTo(models.Season);
  };
  return Week;
};