const express = require("express");
const mongoose = require("mongoose");

const dbConfig = require("./config/dbConfig");
const Users = require("./models/usersModels");

const app = express();

mongoose
  .connect(dbConfig.MONGO_URL)
  .then((data) => console.log("MONGO DB is connected."))
  .catch((err) => console.log(`${err}`));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/api/login", (req, res) => {
  const reqBody = req.body;
  console.log(reqBody);

  const foundUser = Users.findOne(reqBody, (err, data) => {
    if (err) {
      const errMsg = `Error on getting user from DB:${err}`;
      console.log(errMsg);
      res.send(errMsg);
    } else {
      res.send(data);
    }
  });
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on port 3000");
  }
});
