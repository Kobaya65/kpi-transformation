const express = require("express");
const jwt = require("jsonwebtoken");

const usersModel = require("../schemas/schema-users");

const app = express();
const PORT = 5000;

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API !",
  });
});

app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "Post created...",
        authData,
      });
    }
  });
});

app.get("/api/login", (req, res) => {
  // Mock user
  const user = {
    id: 1,
    username: "A178698",
  };

  jwt.sign({ user }, "secretkey", (err, token) => {
    res.json({
      token,
    });
  });
});

// format of token
// Authorization: Bearer <access_tokan

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

app.listen(process.env.PORT || PORT, () =>
  console.log(`API server started on port ${process.env.PORT || PORT}`)
);
