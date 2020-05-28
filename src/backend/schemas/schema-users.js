const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let usersSchema = new Schema({
  user: String,
  role: String,
  pwd: String,
});

module.exports = mongoose.model("users", usersSchema);
