"use strict";

const express = require("express");

const PORT = 5000;

const app = express();
app.get("/", (req, res) => {
  res.send("Hello Pierre-Louis Gaucher from Docker!");
});

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
