const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  roleName: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("Role", RoleSchema);
