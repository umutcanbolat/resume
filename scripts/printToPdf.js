/* eslint-disable no-console */
const http = require('http');
const handler = require('serve-handler');
const puppeteer = require('puppeteer');

const server = http.createServer((request, response) => {
  return handler(request, response, { public: 'build' });
});

server.listen(5000, () => {
  console.log('✅ Server is running at http://localhost:5000');

  (async () => {
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

    console.log('✅ Shutting down.');
    server.close();
  })();
});
