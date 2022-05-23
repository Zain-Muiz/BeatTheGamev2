"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Myteam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  myteam.init(
    {
      id: DataTypes.INTEGER,
      useremail: DataTypes.STRING,
      p1: DataTypes.STRING,
      p2: DataTypes.STRING,
      p3: DataTypes.STRING,
      p4: DataTypes.STRING,
      p5: DataTypes.STRING,
      p6: DataTypes.STRING,
      p7: DataTypes.STRING,
      p8: DataTypes.STRING,
      p9: DataTypes.STRING,
      p10: DataTypes.STRING,
      p11: DataTypes.STRING,
      tscore: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "myteam",
    }
  );
  return Myteam;
};
