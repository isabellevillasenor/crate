// this tells JS or whatever that we're going to use specific variables. Google for more deets
'use strict'

module.exports = function(sequelize, DataTypes) {
  let UserProduct = sequelize.define('userProducts', {
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

  return UserProduct
}
