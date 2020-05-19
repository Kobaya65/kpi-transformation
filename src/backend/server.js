const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const router = express.Router();
const PORT = 4000;

let ApplicationsModel = require("./applications-schema");
let ApplicationsRespModel = require("./applicationsResp-schema");

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
      $elemMatch: { Nom: "forex" },
    },
  };

  ApplicationsModel.find(filtre, function (err, applications) {
    res.json(applications);
  });
});

/* collection applicationsResp */
router.route("/applicationsResp").get(function (req, res) {
  ApplicationsRespModel.find(function (err, applicationsResp) {
    if (err) {
      console.log(err);
    } else {
      res.json(applicationsResp);
    }
  });
});

router.route("/applicationsResp/:_id").get(function (req, res) {
  ApplicationsRespModel.findById(req.params._id, function (
    err,
    applicationResp
  ) {
    res.json(applicationResp);
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

  ApplicationsRespModel.find(filtre, function (err, applicationsResp) {
    res.json(applicationsResp);
  });
});

app.use("/", router);

app.listen(PORT);
