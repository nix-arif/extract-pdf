const data = require('./json/data.json');
const fs = require('fs');
const csv = require('csv');

const ceilY = data.pages[0].content.map((item) => {
	item.y = Math.ceil(item.y);
	return { ...item };
});

// console.log(ceilY);

const ceilYMap = ceilY.reduce((acc, item) => {
	if (!acc[item.y]) acc[item.y] = [];
	acc[item.y].push(item.str.trim());
	return acc;
}, {});

let x = [];

for (const key in ceilYMap) {
	x.push(ceilYMap[key].join(' '));
}

// fs.promises.writeFile('./output-csv/output.csv', JSON.stringify(x));

csv
	// Generate 20 records
	.generate({
		delimiter: '|',
		length: 1,
	})
	// Transform CSV data into records
	.pipe(
		csv.parse({
			delimiter: '|',
		})
	)
	// Transform each value into uppercase
	.pipe(
		csv.transform((record) => {
			return record.map((value) => {
				return value.toUpperCase();
			});
		})
	)
	// Convert objects into a stream
	.pipe(
		csv.stringify({
			quoted: true,
		})
	)
	// Print the CSV stream to stdout
	.pipe(process.stdout);
