
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable("crateProducts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      crateId: {
        type: Sequelize.INTEGER,
        references: {
          model: "crates",
          key: "id"
        },
        allowNull: false
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: "products",
          key: "id"
        },
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("crateProducts");
  }
};