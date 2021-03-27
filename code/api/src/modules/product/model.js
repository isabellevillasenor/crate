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

  Products.associate = function(models) {
    Products.hasMany(models.crateProducts)
    Products.hasMany(models.Crate).through(models.crateProducts)
    Products.hasMany(models.userProducts)
    Products.hasMany(models.User).through(models.userProducts)
  }

  return Products
}