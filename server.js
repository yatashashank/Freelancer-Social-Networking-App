const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

//Configuring DB
const db = require("./config/keys").mongoURI;

//Connecting to database

mongoose
  .connect(db)
  .then(() => console.log("Database connection successfully"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
