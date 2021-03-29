'use strict'

// Product
module.exports = function(sequelize, DataTypes) {
  let Product = sequelize.define('products', {
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

  Product.associate = function(models) {
    Product.hasMany(models.crateProducts)
    Product.hasMany(models.Crate).through(models.crateProducts)
    Product.hasMany(models.userProducts)
    Product.hasMany(models.User).through(models.userProducts)
  }

  return Product
}