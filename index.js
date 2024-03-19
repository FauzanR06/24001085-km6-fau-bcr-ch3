const express = require("express");
const cars = require("./data/cars.json");
const route = require("./route");

// initiate express app
const app = express();
const port = 3000;

app.use(express.json());

app.use("/", express.static("public"));

app.use("/", route);

app.use("*", (req, res) => {
  res.status(404).json({
    data: null,
    message: "Route not found",
  });
});

// app.use("/", (req, res) => {
//   const { name, city, province } = req.query;
//   let data = students.map((student) => student);
//   // call the usecase
//   // const data = studentUsecase.getStudents(name, city, province);

//   const response = {
//     data,
//     message: null,
//   };

//   res.status(200).json(response);
// });

// Error middleware
app.use((err, req, res, next) => {
  let statusCode = 500;
  let message = "Internal Server Error";

  if (err.statusCode) {
    statusCode = err.statusCode;
  }
  if (err.message) {
    message = err.message;
  }

  res.status(statusCode).json({
    data: null,
    message,
  });
});

app.listen(port, () => {
  console.log(`Server running on ${port}!`);
});
