const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const router = express.Router();
const PORT = 4000;

const ApplicationsModel = require("./applications-schema");
const ApplicationsRespModel = require("./applicationsResp-schema");
const StatistiquesModel = require("./statistiques-schema");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/kpi-transformation", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;

connection.once("open", function () {
  console.log(
    "'kpi-transformation' database connection established successfully"
  );
});

/* collection applications */
router.route("/applications").get(function (req, res) {
  ApplicationsModel.find(function (err, applications) {
    if (err) {
      console.log(err);
    } else {
      res.json(applications);
    }
  });
});

router.route("/applications/:_id").get(function (req, res) {
  ApplicationsModel.findById(req.params._id, function (err, application) {
    res.json(application);
  });
});

router.route("/applicationsParFiltre").get(function (req, res) {
  const filtre = {
    // CurrentState: /^((?!(En prod)).)*$/, // ne contient pas En prod
    // CurrentState: /en prod/i, // contient 'en prod', insensible à la casse
    // Authentification: "Par RTFE", // Authentification = "Par RTFE"
    // TypeAppli: "Progiciel",
    Concepts: {
      // renvoie tous les documents dont un des concepts est 'forex'
      //  (peu importe sa place dans le tableau)
      $elemMatch: { Nom: "forex" },
    },
  };

  ApplicationsModel.find(filtre, function (err, applications) {
    res.json(applications);
  });
});

/* collection applicationsResp */
router.route("/applicationsResp").get(function (req, res) {
  ApplicationsRespModel.aggregate()
    .lookup({
      from: "applications",
      localField: "global_id",
      foreignField: "GlobalID",
      as: "applis",
    })
    .exec(function (err, result) {
      if (err) return handleError(err);
      res.json(result);
    });
});

router.route("/applicationsResp/:_id").get(function (req, res) {
  ApplicationsRespModel.aggregate()
    .match({ _id: ObjectId(req.params._id) })
    .lookup({
      from: "applications",
      localField: "global_id",
      foreignField: "GlobalID",
      as: "total",
    })
    .exec(function (err, result) {
      if (err) {
        return err;
      }
      res.json(result);
    });
});

router.route("/respManquantes").get(function (req, res) {
  const filtre = {
    $or: [
      { "assignations.id_personne": "" },
      { "assignations.personne": "" },
      { "assignations.id_structure": "" },
      { "assignations.structure": "" },
      { "assignations.id_role": "" },
      { "assignations.role": "" },
    ],
  };

  ApplicationsRespModel.aggregate()
    .match(filtre)
    .lookup({
      from: "applications",
      localField: "global_id",
      foreignField: "GlobalID",
      as: "applis",
    })
    .exec(function (err, result) {
      if (err) return handleError(err);
      res.json(result);
    });
});

/* collection statistiques */
router.route("/statEvolutionAppliValide").get(function (req, res) {
  StatistiquesModel.aggregate()
    .match({ NomMesure: "ApplicationsValidées" })
    .sort("Périmètre DateMesure")
    .exec(function (err, result) {
      if (err) return handleError(err);
      res.json(result);
    });
});

app.use("/", router);

app.listen(PORT);
