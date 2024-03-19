const cars = require("../../data/cars.json");
const { v4: uuidv4 } = require("uuid");

exports.listCars = () => {
  let data = cars.map((car) => car);

  return data;
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
  updatedCarIndex = 0;

  // Update the data by id
  cars.map((car, index) => {
    if (car?.id == id) {
      cars[index] = payload;
      updatedCarIndex = index;
    }
  });

  return cars[updatedCarIndex];
};

exports.deleteCar = (id) => {
  index = cars.findIndex((car) => car.id === id);
  cars.splice(index, 1);

  return null;
};
