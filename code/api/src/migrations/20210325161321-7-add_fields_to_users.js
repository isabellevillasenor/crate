'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn("users", "image", {
        type: Sequelize.STRING,
      }),

      queryInterface.addColumn("users", "description", {
        type: Sequelize.STRING,
      }),

      queryInterface.addColumn("users", "address", {
        type: Sequelize.STRING,
      }),
    ];
  },

  down: async (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('users', 'image'),
      queryInterface.removeColumn('users', 'description'),
      queryInterface.removeColumn('users', 'address')
    ];
  }
};
