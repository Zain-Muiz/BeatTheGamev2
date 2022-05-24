"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Fanscore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Fanscore.init(
    {
      name: DataTypes.STRING,
      score: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "fanscores",
    }
  );
  return Fanscore;
};
