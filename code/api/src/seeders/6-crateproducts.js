'use strict';

const bcrypt = require('bcrypt');
const config = require('../config/server.json');
const params = require('../config/params.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('crateproducts', [
      {
        crateId: 1,
        productId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        crateId: 1,
        productId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        crateId: 2,
        productId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        crateId: 2,
        productId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        crateId: 3,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        crateId: 3,
        productId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        crateId: 4,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        crateId: 4,
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        crateId: 5,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        crateId: 5,
        productId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        crateId: 5,
        productId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        crateId: 5,
        productId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        crateId: 5,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        crateId: 5,
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        crateId: 5,
        productId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        crateId: 5,
        productId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('crateproducts', null, {});
  }
  }
