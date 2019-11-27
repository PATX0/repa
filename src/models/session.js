'use strict';
module.exports = (sequelize, DataTypes) => {
  const session = sequelize.define('session', {
    userId: DataTypes.INTEGER,
    start: DataTypes.DATE,
    end: DataTypes.DATE
  }, {});
  session.associate = function(models) {
    session.hasOne(models.user, {foreignKey: {name: 'userId'}});
  };
  return session;
};