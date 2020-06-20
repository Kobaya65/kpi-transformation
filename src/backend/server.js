const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const router = express.Router();
const PORT = 4000;
const PORT_MONGODB = 27017;
const USER = "kpi-user";
const PWD = "kpi-user+20200617";
const APPLI = "kpi-transformation";

const ApplicationsModel = require("./schemas/schema-applications");
const ApplicationsRespModel = require("./schemas/schema-applicationsResp");
const StatisticsModel = require("./schemas/schema-statistics");
// const HandleError = require("../containers/errorHandler");

app.use(cors());
app.use(bodyParser.json());

mongoose
  // .connect(`mongodb://localhost:${PORT_MONGODB}/${APPLI}`, {
  // .connect(`mongodb://${USER}:${PWD}@localhost:${PORT_MONGODB}/${APPLI}`, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // })
  // -->https://stackoverflow.com/questions/45576367/mongoose-connection-authentication-failed
  .connect(`mongodb://localhost:${PORT_MONGODB}/${APPLI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    auth: { authSource: "admin" },
    user: USER,
    pass: PWD,
  })
  .then(() => {
    console.log(
      `Connection to 'kpi-transformation' database established successfully on port ${PORT_MONGODB}`
    );
  })
  .catch((error) => {
    console.log("Problème de connection à la base MongoDB !");
    console.log(error);
  });

const connection = mongoose.connection;

connection.on("error", (error) => console.log(error));

// connection.once("open", function () {
//   console.log(
//     `Connection to 'kpi-transformation' database established successfully on port ${PORT_MONGODB}`
//   );
// });

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
  const filter = {
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

  ApplicationsModel.find(filter, function (err, applications) {
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
      as: "app",
    })
    .exec(function (err, result) {
      // if (err) return HandleError(err);
      if (err) return err;
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
      as: "app",
    })
    .exec(function (err, result) {
      if (err) {
        return err;
      }
      res.json(result);
    });
});

router.route("/respManquantes").get(function (req, res) {
  const filter = {
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
    .match(filter)
    .lookup({
      from: "applications",
      localField: "global_id",
      foreignField: "GlobalID",
      as: "app",
    })
    .exec(function (err, result) {
      // if (err) return HandleError(err);
      if (err) return err;
      res.json(result);
    });
});

router.route("/cycleVieManquant").get(function (req, res) {
  // const filter = {
  //   $or: [
  //     { "CycleDeVie.name": "" },
  //     { "CycleDeVie.startDate": "" },
  //     { "CycleDeVie.endDate": "" },
  //   ],
  // };
  const filter = {
    "CycleDeVie.startDate": { $lte: new Date("1900-01-01") },
  };

  ApplicationsModel.find(filter, function (err, applications) {
    res.json(applications);
  });
});

/* collection statistiques */
router.route("/statEvolutionAppliValide").get(function (req, res) {
  StatisticsModel.aggregate()
    .match({ NomMesure: "ApplicationsValidées" })
    .sort("Périmètre DateMesure")
    .exec(function (err, result) {
      // if (err) return HandleError(err);
      if (err) return err;
      res.json(result);
    });
});

app.use("/", router);

app.listen(PORT);
