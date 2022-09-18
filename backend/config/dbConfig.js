require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL;

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

module.exports = { MONGO_URL, mongooseOptions };
