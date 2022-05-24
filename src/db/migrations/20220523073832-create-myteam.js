"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("myteams", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      useremail: {
        type: Sequelize.STRING,
      },
      username: {
        type: Sequelize.STRING,
      },
      p1: {
        type: Sequelize.STRING,
      },
      p2: {
        type: Sequelize.STRING,
      },
      p3: {
        type: Sequelize.STRING,
      },
      p4: {
        type: Sequelize.STRING,
      },
      p5: {
        type: Sequelize.STRING,
      },
      p6: {
        type: Sequelize.STRING,
      },
      p7: {
        type: Sequelize.STRING,
      },
      p8: {
        type: Sequelize.STRING,
      },
      p9: {
        type: Sequelize.STRING,
      },
      p10: {
        type: Sequelize.STRING,
      },
      p11: {
        type: Sequelize.STRING,
      },
      tscore: {
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
    await queryInterface.dropTable("myteams");
  },
};
