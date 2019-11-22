"use strict";

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('user', {
    username: DataTypes.STRING,
    password_hash: DataTypes.STRING
  }, {});

  User.associate = function (models) {// associations can be defined here
  };

  return User;
};