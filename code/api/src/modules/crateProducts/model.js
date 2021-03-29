// this tells JS or whatever that we're going to use specific variables. Google for more deets
'use strict'

module.exports = function(sequelize, DataTypes) {
  let crateProducts = sequelize.define('crateProducts', {
    crate_id: {
      type: DataTypes.INTEGER
    },
    product_id: {
      type: DataTypes.INTEGER
    }
  })
// DONT Define relationship here as you would in Models in Rails
// (for a joins table)

  return crateProducts
}
