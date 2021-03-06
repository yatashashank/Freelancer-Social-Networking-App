const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");

const app = express();

//Configuring DB
const db = require("./config/keys").mongoURI;

//Connecting to database

mongoose
  .connect(db)
  .then(() => console.log("Database connection successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

//routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profile", profile);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
