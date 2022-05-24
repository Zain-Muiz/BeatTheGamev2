"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Userlogin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Userlogin.init(
    {
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      useremail: DataTypes.STRING,
      batch: DataTypes.STRING,
      phone: DataTypes.STRING,
      favTeam: DataTypes.STRING,
      password: DataTypes.STRING,
      pass: DataTypes.STRING,
      flag: DataTypes.INTEGER,
      score: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "userlogins",
    }
  );
  return Userlogin;
};
