// 'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      Orders.belongsTo(models.Users, {
        foreignKey: 'id_user',
      });
    }
  }
  Orders.init(
    {
      id_user: DataTypes.INTEGER,
      clientName: DataTypes.STRING,
      table: DataTypes.INTEGER,
      status: DataTypes.STRING,
      processedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Orders',
    }
  );
  return Orders;
};
