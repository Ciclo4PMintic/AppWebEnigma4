const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nombreRol: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
});
