const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Project = require("./project");
const User = require("./user");

const inscriptionSchema = new Schema({
  proyect: {
    type: Project,
    required: true,
  },
  user: {
    type: User,
    required: true,
  },
  estado: {
    //pendiente por definir
  },
  admissionDate: {
    type: String,
    default: Date.now(),
  },
  egressDate: {
    type: String,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Inscription", inscriptionSchema);
