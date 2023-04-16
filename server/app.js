const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Route is working");
});

module.exports = app;
