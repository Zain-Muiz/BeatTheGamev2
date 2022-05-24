"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("userlogins", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      username: {
        type: Sequelize.STRING,
      },
      useremail: {
        type: Sequelize.STRING,
      },
      batch: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      favTeam: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      pass: {
        type: Sequelize.STRING,
      },
      flag: {
        type: Sequelize.INTEGER,
      },
      score: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("userlogins");
  },
};
