const puppeteer = require('puppeteer');

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

  await browser.close();
})();
