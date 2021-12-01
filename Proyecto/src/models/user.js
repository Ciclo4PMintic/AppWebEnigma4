const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Rol = require("./role");
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
    unique: true,
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

userSchema.pre("save", function (next) {
  bcrypt
    .genSalt(10)
    .then((salts) => {
      bcrypt
        .hash(this.password, salts)
        .then((hash) => {
          this.password = hash;
          next();
        })
        .catch((error) => {
          next(error);
        });
    })
    .catch((error) => {
      next(error);
    });
});
module.exports = mongoose.model("User", userSchema);
