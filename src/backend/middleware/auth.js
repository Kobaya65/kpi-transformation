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

async function findUser(filter) {
  const userFound = await UsersModel.find(filter, { _id: false });

  console.log(`userFound dans findUser() = ${userFound}`);

  return userFound;
}

app.post("/login", async function (req, res) {
  // Read username, role & password from request body
  const { matricule, role, pwd } = req.body;
  console.log("req ===> " + matricule, role, pwd);

  let filter = {
    matricule: matricule,
    role: role,
    pwd: pwd,
  };

  const userF = await findUser(filter);
  console.log("userF = " + userF.matricule, userF.role, userF.pwd);

  if (userF.matricule && userF.role && userF.pwd) {
    // Generate an access token
    const accessToken = jwt.sign(
      { matricule: userF.matricule, role: userF.role },
      accessTokenSecret
    );

    res.json({
      accessToken,
    });
  } else {
    res.send("Username or password incorrect");
    console.log("Username or password incorrect !!!!");
    console.log("res = " + res);
  }
});

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
