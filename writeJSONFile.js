const fs = require('fs');
const process = require('process');

const writeJSONFile = (data) => {
	return new Promise((resolve, reject) => {
    process.chdir('../');
		fs.promises
			.writeFile('./json/data.json', JSON.stringify(data))
  }		
})

module.exports = writeJSONFile;
