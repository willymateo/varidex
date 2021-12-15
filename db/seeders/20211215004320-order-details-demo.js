'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    const products = await queryInterface.sequelize.query(
      `SELECT id from Products;`
    );

    const orders = await queryInterface.sequelize.query(
      `SELECT id from Orders;`
    );

    const productsRows = products[0];
    const ordersRows = orders[0];

    await queryInterface.bulkInsert('Orders_details', [
      {orderID: ordersRows[0].id, productID: productsRows[1].id, createdAt: new Date(), updatedAt: new Date()},
      {orderID: ordersRows[1].id, productID: productsRows[2].id, createdAt: new Date(), updatedAt: new Date()},
      {orderID: ordersRows[2].id, productID: productsRows[3].id, createdAt: new Date(), updatedAt: new Date()},
      {orderID: ordersRows[0].id, productID: productsRows[4].id, createdAt: new Date(), updatedAt: new Date()},
      {orderID: ordersRows[1].id, productID: productsRows[5].id, createdAt: new Date(), updatedAt: new Date()},
      {orderID: ordersRows[2].id, productID: productsRows[6].id, createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Orders_details', null, {});
  }
};
