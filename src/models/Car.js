const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Car = sequelize.define("car", {
  // ---> cars
  // Definimos las columnas aquí
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Car;
