'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn("subscriptions", "delivery_date", {
        type: Sequelize.DATE,
      }),
    ];
  },

  down: async (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('subscriptions', 'delivery_date')
    ];
  }
};
