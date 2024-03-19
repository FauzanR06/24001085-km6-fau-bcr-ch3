const express = require("express");
const router = express.Router();
const carController = require("../controller/car");

router.route("/").get(carController.listCars).post(carController.createCar);

router
  .route("/:id")
  .get(carController.detailCar)
  .put(carController.updateCar)
  .delete(carController.deleteCar);
module.exports = router;
