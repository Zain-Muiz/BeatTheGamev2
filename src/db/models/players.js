"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Players extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  players.init(
    {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      img: DataTypes.STRING,
      skill: DataTypes.STRING,
      credit: DataTypes.STRING,
      team: DataTypes.STRING,
      score: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "players",
    }
  );
  return Players;
};
