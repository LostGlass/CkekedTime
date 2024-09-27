var { Schema, model } = require("mongoose");

var Role = new Schema({
  value: { type: String, unique: true, default: "USER" },
});

module.exports = model("Role", Role);
