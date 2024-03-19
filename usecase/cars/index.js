const carRepository = require("../../repository/cars");

exports.listCars = () => {
  return carRepository.listCars();
};

exports.detailCar = (id) => {
  const data = carRepository.detailCar(id);
  return data;
};

exports.createCar = (payload) => {
  const data = carRepository.createCar(payload);
  return data;
};

exports.updateCar = (id, payload) => {
  const data = carRepository.updateCar(id, payload);
  return data;
};

exports.deleteCar = (id) => {
  const data = carRepository.deleteCar(id);
  return data;
};
