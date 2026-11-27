const fs = require("fs");
const path = require("path");

const sourcePdf = path.resolve(__dirname, "../src/content/resume/Muthusamy_Karunanithi_Ashok.pdf");
const publicPdf = path.resolve(__dirname, "../public/files/Muthusamy_Karunanithi_Ashok.pdf");

const sourceWord = path.resolve(__dirname, "../src/content/resume/Muthusamy_Karunanithi_Ashok.docx");
const publicWord = path.resolve(__dirname, "../public/files/Muthusamy_Karunanithi_Ashok.docx");


if (!fs.existsSync(sourcePdf)) {
  console.error(`Missing source PDF: ${sourcePdf}`);
  process.exit(1);
}

if (!fs.existsSync(sourceWord)) {
  console.error(`Missing source Word file: ${sourceWord}`);
  process.exit(1);
}

fs.mkdirSync(path.dirname(publicPdf), { recursive: true });
fs.copyFileSync(sourcePdf, publicPdf);
console.log(`Synced ${sourcePdf} -> ${publicPdf}`);

fs.copyFileSync(sourceWord,publicWord);
console.log(`Synced ${sourceWord} -> ${publicWord}`);