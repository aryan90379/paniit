const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 3000 });
  await page.goto('https://blr.paniit.org/', { waitUntil: 'networkidle2' });
  
  // Wait for Angular/Almashines to render
  await page.waitForTimeout(3000);
  
  await page.screenshot({ path: 'public/blr_screenshot.png', fullPage: true });
  await browser.close();
})();
