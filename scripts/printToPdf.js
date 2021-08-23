/* eslint-disable no-console */
const http = require('http');
const fs = require('fs');
const handler = require('serve-handler');
const puppeteer = require('puppeteer');

async function toPdf() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5000', {
    waitUntil: 'networkidle2',
  });
  await page.pdf({
    path: './output/Umut Canbolat CV.pdf',
    format: 'a4',
    preferCSSPageSize: true,
  });

  console.log('✅ PDF file is created.');
  await browser.close();
}

const server = http.createServer((request, response) => {
  return handler(request, response, { public: 'build' });
});

server.listen(5000, async () => {
  console.log('✅ Server is running at http://localhost:5000');

  fs.mkdir('./output', { recursive: true }, (err) => {
    if (err) {
      console.error(err);
    }
  });

  await toPdf();

  console.log('✅ Shutting down the server.');
  server.close();
});
