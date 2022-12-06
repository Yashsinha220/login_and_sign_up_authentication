const mongoose = require("mongoose");

// now setting up the new mongoose

let UserSchema = new mongoose.Schema({
  uname: String,
  email: String,
  password: String,
});

// we have make a new userschema for the model

// now make a new mode

const userdetail = mongoose.model("userdetail", UserSchema);

module.exports = userdetail;
