/* eslint-disable strict */

'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.hasMany(models.Orders, {
        foreignKey: 'id_user',
      });
    }
  }
  Users.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
      restaurant: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Users',
    }
  );
  return Users;
};
