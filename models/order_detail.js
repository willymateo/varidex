'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Order_detail.init({
    orderID: DataTypes.INTEGER,
    productID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order_detail',
    tableName: 'Orders_details',
  });
  return Order_detail;
};
