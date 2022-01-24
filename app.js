const express = require("express");
// const data = require("./json/data.json");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.header("Content-Type", "application/json");
  res.sendFile(path.join(__dirname, "/json/data.json"));
});

app.listen(3000);
