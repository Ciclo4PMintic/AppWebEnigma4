const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StatusSchema = new Schema({
  statusName: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("Status", StatusSchema);
