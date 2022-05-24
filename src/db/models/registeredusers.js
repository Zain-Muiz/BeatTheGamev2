"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Registeredusers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Registeredusers.init(
    {
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      useremail: DataTypes.STRING,
      batch: DataTypes.STRING,
      phone: DataTypes.STRING,
      favTeam: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "registeredusers",
    }
  );
  return Registeredusers;
};
