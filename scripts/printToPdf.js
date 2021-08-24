/* eslint-disable no-console */
const fs = require('fs');
const express = require('express');
const puppeteer = require('puppeteer');

async function toPdf() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5000/resume', {
    waitUntil: 'networkidle2',
  });
  await page.pdf({
    path: './output/Umut-Canbolat-Resume.pdf',
    format: 'a4',
    preferCSSPageSize: true,
  });

  console.log('✅ PDF file is created.');
  await browser.close();
}

const app = express();
app.use('/resume', express.static('./build'));

const server = app.listen(5000, async () => {
  console.log('✅ Static page is being served at http://localhost:5000/resume');

  fs.mkdir('./output', { recursive: true }, (err) => {
    if (err) {
      console.error(err);
    }
  });

  await toPdf();

  console.log('✅ Shutting the server down.');
  server.close();
});
