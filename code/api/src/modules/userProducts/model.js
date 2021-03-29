// this tells JS or whatever that we're going to use specific variables. Google for more deets
'use strict'

module.exports = function(sequelize, DataTypes) {
  let userProducts = sequelize.define('userProducts', {
    user_id: {
      type: DataTypes.INTEGER
    },
    product_id: {
      type: DataTypes.INTEGER
    },
    delivered_date: {
      type: DataTypes.DATE
    },
    kept: {
      type: DataTypes.BOOLEAN
    }
  })
// Define relationship here as you would in Models in Rails
  userProducts.associate = function(models) {
    // User.hasMany(models.userProducts)
    userProducts.belongsTo(models.User)
    userProducts.belongsTo(models.Products)
  }

  return userProducts
}