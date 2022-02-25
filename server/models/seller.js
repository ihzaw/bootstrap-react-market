'use strict';
const uuid4 = require('uuid4')

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
    seller_code: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: uuid4()
    },
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