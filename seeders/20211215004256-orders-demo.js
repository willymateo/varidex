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
    const customers = await queryInterface.sequelize.query(
      `SELECT id from Customers;`
    );

    const customersRows = customers[0]

    await queryInterface.bulkInsert('Orders', [
      {order_date: new Date(), customerID: customersRows[0].id, createdAt: new Date(), updatedAt: new Date()},
      {order_date: new Date(), customerID: customersRows[1].id, createdAt: new Date(), updatedAt: new Date()},
      {order_date: new Date(), customerID: customersRows[2].id, createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
