'use strict'

// Product
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    // The reason this has `return sequelize` instead of `let Product = ` is because there are no current relationships
    name: {
      type: DataTypes.STRING
    },
    slug: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    type: {
      type: DataTypes.INTEGER
    },
    gender: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.TEXT
    }
  })
}