const express = require("express");
const routerCtrl = express.Router();

const userCtrl = require("../backend/controllers/user");

routerCtrl.post("/signup", userCtrl.signup);
routerCtrl.post("/login", userCtrl.login);

module.exports = routerCtrl;
