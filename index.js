const filePath = require('./readFileInFolder');
const extractPDF = require('./extractPDF');
const writeJSONFile = require('./writeJSONFile');
const express = require('express');

const app = express();
app.use(express.json());

async function start() {
	const inputFile = await filePath();
	const data = await extractPDF(inputFile);
	await writeJSONFile(data);
	app.get('/', (req, res) => {
		res.header('Content-Type', 'application/json');
		res.sendFile(path.join(__dirname, 'data.json'));
	});
	app.listen(3000);
}

start();
