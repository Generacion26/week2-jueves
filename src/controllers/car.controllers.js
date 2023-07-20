const catchError = require("../utils/catchError");
const Car = require("../models/Car");

const getAll = catchError(async (req, res) => {
  const car = await Car.findAll();
  return res.json(car);
});

module.exports = {
  getAll,
};
