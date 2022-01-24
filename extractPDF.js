const PDFExtract = require('pdf.js-extract').PDFExtract;

const pdfExtract = new PDFExtract();
const options = {};

const extractPDF = (filePath) => {
	return new Promise((resolve, reject) => {
		pdfExtract
			.extract(filePath, options)
			.then((data) => {
				resolve(data);
			})
			.catch((error) => {
				reject(error.message);
			});
	});
};

module.exports = extractPDF;
