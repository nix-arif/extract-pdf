const filePath = require("./readFileInFolder");
const extractPDF = require("./extractPDF");
const writeJSONFile = require("./writeJSONFile");
const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.header("Content-Type", "application/json");
  res.sendFile(path.join(__dirname, "./json/data.json"));
});

async function start() {
  const inputFile = await filePath();
  const data = await extractPDF(inputFile);
  writeJSONFile(data);
  app.listen(3000);
}

start();

// Reconstruct
