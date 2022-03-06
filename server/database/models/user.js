'use strict';
const bcrypt = require('bcryptjs/dist/bcrypt.js');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Todo, { foreignKey: 'userId', as: 'todos' });
    }
  }

  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    defaultScope: {
      rawAttributes: { exclude: ['password'] },
    },
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(async (user) => {
    user.password = await user.generatePasswordHash();
  });

  User.prototype.generatePasswordHash = function () {
    if (this.password) {
      return bcrypt.hash(this.password, 10);
    }
  };

  return User;
};