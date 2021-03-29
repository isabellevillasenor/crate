// this tells JS or whatever that we're going to use specific variables. Google for more deets
'use strict'

module.exports = function(sequelize, DataTypes) {
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
    Crate.hasMany(models.Subscription)
    Crate.belongsToMany(models.Product, {
      through: 'crateProducts'
    });
  };

  return Crate
}
