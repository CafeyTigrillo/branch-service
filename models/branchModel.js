const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Branches = sequelize.define("Branch", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
}, { timestamps: false });

module.exports = { Branches }; 
