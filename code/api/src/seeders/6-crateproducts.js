'use strict';

const bcrypt = require('bcrypt');
const config = require('../config/server.json');
const params = require('../config/params.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('crateProducts', [
      {
        crateId: 1,
        productId: 7
      },
      {
        crateId: 1,
        productId: 8
      },
      {
        crateId: 2,
        productId: 5
      },
      {
        crateId: 2,
        productId: 6
      },
      {
        crateId: 3,
        productId: 2
      },
      {
        crateId: 3,
        productId: 4
      },
      {
        crateId: 4,
        productId: 1
      },
      {
        crateId: 4,
        productId: 3
      },
      {
        crateId: 5,
        productId: 2
      },
      {
        crateId: 5,
        productId: 4
      },
      {
        crateId: 5,
        productId: 7
      },
      {
        crateId: 5,
        productId: 8
      },
      {
        crateId: 5,
        productId: 1
      },
      {
        crateId: 5,
        productId: 3
      },
      {
        crateId: 5,
        productId: 5
      },
      {
        crateId: 5,
        productId: 6
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('crateProducts', null, {});
  }
  }
