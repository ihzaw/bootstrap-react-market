'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seller extends Model {
    static associate(models) {
      Seller.hasMany(models.Product, { foreignKey: 'seller_uuid' })
    }
  }
  Seller.init({
    seller_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Seller',
  });
  return Seller;
};