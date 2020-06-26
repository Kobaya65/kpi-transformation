const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const UsersModel = require("../schemas/schema-users");
const app = express();

const PORT_AUTH = 5000;
const PORT_MONGODB = 27017;
const USER = "kpi-user";
const PWD = "kpi-user+20200617";
const BASE = "kpi-transformation";
const accessTokenSecret = "myAccessTokenSecret";

app.use(bodyParser.json());

mongoose
  .connect(`mongodb://localhost:${PORT_MONGODB}/${BASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    auth: { authSource: "admin" },
    user: USER,
    pass: PWD,
  })
  .then(() => {
    console.log(
      `Connexion à la base ${BASE} établie avec succès sur le port ${PORT_MONGODB}`
    );
  })
  .catch((error) => {
    console.log("Problème de connexion à la base MongoDB !");
    console.log(error);
  });

const connection = mongoose.connection;

connection.on("error", (error) => console.log(error));

app.post("/login", (req, res) => {
  // Read username, role & password from request body
  const { matricule, role, pwd } = req.body;

  let filter = {
    matricule: matricule,
    role: role,
    pwd: pwd,
  };
  let userFound = findUser(filter);
  console.log(
    "userFound = " + userFound.matricule,
    userFound.role,
    userFound.pwd
  );

  if (userFound.matricule && userFound.role && userFound.pwd) {
    // Generate an access token
    const accessToken = jwt.sign(
      { matricule: userFound.matricule, role: userFound.role },
      accessTokenSecret
    );

    res.json({
      accessToken,
    });
  } else {
    res.send("Username or password incorrect");
  }
});

// app.get("/api", (req, res) => {
//   res.json({
//     message: "Welcome to the API !",
//   });
// });

// app.post("/api/posts", verifyToken, (req, res) => {
//   jwt.verify(req.token, "secretkey", (err, authData) => {
//     if (err) {
//       res.sendStatus(403);
//     } else {
//       res.json({
//         message: "Post created...",
//         authData,
//       });
//     }
//   });
// });

// format of token
// Authorization: Bearer <access_tokan

async function findUser(filter) {
  let found = {
    matricule: "",
    role: "",
    pwd: "",
  };

  await UsersModel.find(filter, function (err, res) {
    console.log(
      "filter dans UsersModel() = " + filter.matricule,
      filter.role,
      filter.pwd
    );
    console.log("res = " + res.matricule, res.role, res.pwd);
    if (err || !UsersModel.length) {
      console.log("Erreur dans usersModel.find() : " + err);
      return err;
    } else {
      console.log("Requête réussie");
      console.log(
        "juste après 'Requête réussie' = " + res.matricule,
        res.role,
        res.pwd
      );

      found = {
        matricule: res.matricule,
        role: res.role,
        pwd: res.pwd,
      };
      console.log("res = " + res.matricule, res.role, res.pwd);
      console.log("found = " + found.matricule, found.role, found.pwd);
    }

    return found;
  });
}

// Verify token
function verifyToken(req, res, next) {
  // get auth header value
  const bearerHeader = req.headers["authorization"];
  // check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // split at the space
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    // OR const bearerToken = bearerHeader.split( ' ' )[1];
    // set the token
    req.token = bearerToken;
    // next middleware
    next();
  } else {
    // forbidden
    res.sendStatus(403);
  }
}

app.listen(process.env.PORT_AUTH || PORT_AUTH, () =>
  console.log(
    `Serveur d'authentification démarré sur le port ${
      process.env.PORT_AUTH || PORT_AUTH
    }`
  )
);
