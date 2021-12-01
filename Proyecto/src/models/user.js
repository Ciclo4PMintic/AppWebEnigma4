const mongoose = require("mongoose");
const Rol = require("./rol");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.now(),
  },
  identity: {
    type: String,
    required: false,
  },
  rol: {
    type: Rol,
    required: true,
  },
  estado: {
    type: Rol.String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
