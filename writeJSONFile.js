const fs = require("fs");
const process = require("process");

const writeJSONFile = (data) => {
  return new Promise((resolve, reject) => {
    fs.promises
      .writeFile("./json/data.json", JSON.stringify(data))
      .then((info) => {
        resolve("JSON file saved");
      })
      .then((err) => {
        reject(err);
      });
  });
};

module.exports = writeJSONFile;
