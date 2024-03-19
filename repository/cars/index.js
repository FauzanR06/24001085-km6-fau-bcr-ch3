const cars = require("../../data/cars.json");
const { v4: uuidv4 } = require("uuid");

exports.listCars = () => {
  return cars.map((car) => car);
};

exports.detailCar = (id) => {
  let data = cars.map((car) => car);

  data = data.filter((car) => car.id == id);
  if (data.length == 0) {
    return null;
  }
  return data[0];
};

exports.createCar = (payload) => {
  payload = {
    id: uuidv4(),
    ...payload,
  };
  // Insert to data student
  cars.push(payload);

  return payload;
};

exports.updateCar = (id, payload) => {
  updatedCarsIndex = 0;

  cars.map((car, index) => {
    if (car?.id == id) {
      cars[index] = payload;
      updatedCarsIndex = index;
    }
  });

  return cars[updatedCarsIndex];
};

exports.deleteCar = (id) => {
  index = cars.findIndex((car) => car.id === id);
  cars.splice(index, 1);

  return null;
};
