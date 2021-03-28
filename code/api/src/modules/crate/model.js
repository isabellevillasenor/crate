// this tells JS or whatever that we're going to use specific variables. Google for more deets
'use strict'

module.exports = function(sequelize, DataTypes) {
  // defines the data types in the Crate table
  let Crate = sequelize.define('crates', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })
// Define relationship here as you would in Models in Rails
  Crate.associate = function(models) {
    // defines the associations between Crate and other tables
    Crate.hasMany(models.Subscription)
  }

  return Crate
}
