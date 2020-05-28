const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let statistiquesSchema = new Schema(
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

module.exports = mongoose.model("statistiques", statistiquesSchema);
