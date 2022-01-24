const express = require('express');
const data = require('./json/data.json');

const app = express();

app.get('/', (req, res) => {
	res.json(data);
});

app.listen(3000);
