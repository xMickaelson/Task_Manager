const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection is Successful");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });

module.exp;
