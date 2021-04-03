'use strict';

const bcrypt = require('bcrypt');
const config = require('../config/server.json');
const params = require('../config/params.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('subscriptions', [
      {
        userId: 2,
        crateId: 1,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        crateId: 2,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        crateId: 3,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        crateId: 1,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        crateId: 2,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        crateId: 3,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        crateId: 3,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        crateId: 4,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        crateId: 1,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        crateId: 2,
        delivery_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('subscriptions', null, {});
  }
  }
