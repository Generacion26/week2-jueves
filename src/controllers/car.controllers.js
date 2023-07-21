const catchError = require("../utils/catchError");
const Car = require("../models/Car");

const getAll = catchError(async (req, res) => {
  const car = await Car.findAll();
  return res.json(car);
});

const create = catchError(async (req, res) => {
  const car = await Car.create(req.body);
  return res.status(201).json(car);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const car = await Car.findByPk(id);
  if (!car) return res.sendStatus(400);
  return res.json(car);
});

const destroy = catchError(async (req, res) => {
  const { id } = req.params;
  const carDestroy = await Car.destroy({ where: { id } });
  if (!carDestroy) return res.sendStatus(400);
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;

  const car = await Car.update(req.body, {
    where: { id },
    returning: true,
  });
  if (car[0] === 0) return res.sendStatus(400);
  return res.json(car[1][0]);
});

module.exports = {
  getAll,
  // paso 4: recuerden de exportar
  create,
  getOne,
  destroy,
  update,
};
