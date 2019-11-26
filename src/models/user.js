

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.session);
  };
  return User;
};