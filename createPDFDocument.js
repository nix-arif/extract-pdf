const fs = require("fs");
const process = require("process");
const PDFDocument = require("pdfkit");
const doc = new PDFDocument({
  size: "A4",
  margins: { top: 0, bottom: 0, left: 0, right: 0 },
  font: "./customFonts/Arial.ttf",
});

doc.fontSize(9);

const data = require("./json/data.json");

doc.pipe(fs.createWriteStream("./output-file/output.pdf"));
doc.text(
  data.pages[0].content[0].str,
  data.pages[0].content[0].x,
  data.pages[0].content[0].y
);

data.pages.forEach((page) => {
  page.content.forEach((item) => {
    doc.text(item.str, item.x, item.y);
  });
  doc.addPage();
});
doc.end();
