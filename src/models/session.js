'use strict';
module.exports = (sequelize, DataTypes) => {
  const session = sequelize.define('session', {
    user_id: DataTypes.INTEGER,
    start: DataTypes.DATE,
    end: DataTypes.DATE
  }, {});
  session.associate = function(models) {
    session.hasOne(models.user);
  };
  return session;
};