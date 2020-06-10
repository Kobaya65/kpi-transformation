const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let statisticsSchema = new Schema(
  {
    NomMesure: String,
    Périmètre: String,
    DateMesure: Date,
    ValeurDeLaMesure: Number,
  },
  {
    collection: "statistiques",
  }
);

module.exports = mongoose.model("statistics", statisticsSchema);
