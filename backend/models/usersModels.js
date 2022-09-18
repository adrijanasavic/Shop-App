const mongoose = require("mongoose");

const userShema = new mongoose.Schema({
  username: { type: String, require: Boolean },
  password: { type: String, require: Boolean },
  email: { type: String, require: Boolean },
  firstName: { type: String },
  lastName: { type: String },
  gender: { type: String },
  address: { type: String },
  city: { type: String },
  postCode: { type: String },
  phoneNumber: { type: String },

  Admin: { type: String, require: Boolean, default: false },
  Active: { type: String, require: Boolean, default: false },
});

UserModel = mongoose.model("users", userShema);

module.exports = UserModel;
