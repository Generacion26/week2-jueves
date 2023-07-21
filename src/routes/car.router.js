const {
  getAll,
  create,
  getOne,
  destroy,
  update,
} = require("../controllers/car.controllers");
const express = require("express");

const carRouter = express.Router();

carRouter
  .route("/")
  .get(getAll)
  // paso 5, creo el post
  .post(create);

//cars/id
carRouter.route("/:id").get(getOne).delete(destroy).put(update);

module.exports = carRouter;
