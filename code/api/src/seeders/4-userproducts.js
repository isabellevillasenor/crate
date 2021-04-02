'use strict';

const bcrypt = require('bcrypt');
const config = require('../config/server.json');
const params = require('../config/params.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('userproducts', [
      {
        userId: 2,
        productId: 1,
        kept: true,
        deliveredDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        productId: 2,
        kept: true,
        deliveredDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        productId: 3,
        kept: true,
        deliveredDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        productId: 1,
        kept: true,
        deliveredDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        productId: 2,
        kept: true,
        deliveredDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        productId: 3,
        kept: false,
        deliveredDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        productId: 3,
        kept: false,
        deliveredDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        productId: 4,
        kept: true,
        deliveredDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        productId: 1,
        kept: true,
        deliveredDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        productId: 2,
        kept: true,
        deliveredDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('userproducts', null, {});
  }
  }
