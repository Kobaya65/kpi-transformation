const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const usersSchema = mongoose.Schema({
  matricule: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  pwd: { type: String, required: true },
});

usersSchema.plugin(uniqueValidator);

module.exports = mongoose.model("users", usersSchema);
