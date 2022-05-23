"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Deptscore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  deptscore.init(
    {
      name: DataTypes.STRING,
      score: DataTypes.INTEGER,
      count: DataTypes.INTEGER,
      average: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "deptscore",
    }
  );
  return Deptscore;
};
