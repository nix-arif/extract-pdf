const fs = require("fs");
const process = require("process");

const constructFilePath = () => {
  return new Promise((resolve, reject) => {
    process.chdir("./input-file");
    fs.promises
      .readdir(process.cwd())
      .then((filename) => {
        resolve(process.cwd() + "/" + filename);
        process.chdir("../");
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};

module.exports = constructFilePath;
