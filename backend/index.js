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

  const foundUser = Users.findOne(reqBody, (err, data) => {
    if (err) {
      const errMsg = `Error on getting user from DB:${err}`;
      console.log(errMsg);
      res.send(errMsg);
      return;
    }
    res.send(data || "Use not found");
  });
});

app.post("/api/register", async (req, res) => {
  const reqBody = req.body;

  Users.findOne(reqBody, async (err, data) => {
    console.log(data);
    if (err) {
      const errorMsg = `Error on register user: ${err}`;

      console.log(errorMsg);
      res.send(errorMsg);
      return;
    }

    if (data) res.send(`User already exist: ${data.username}`);
    else {
      const newUser = new Users(reqBody);
      const saveNewUser = await newUser.save();

      console.log(saveNewUser);
      res.send(saveNewUser);
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
