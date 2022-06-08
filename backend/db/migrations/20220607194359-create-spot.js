'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users" }
      },
      name: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        // allowNull:false,
      },
      guests: {
        type: Sequelize.INTEGER,
        // allowNull: false,
      },
      beds: {
        type: Sequelize.INTEGER,
        // allowNull: false,
      },
      baths: {
        type: Sequelize.INTEGER,
        // allowNull:false,
      },
      address: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      state: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      country: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL,
        // allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Spots');
  }
};
