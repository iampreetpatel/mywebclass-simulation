const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Replace 'http://localhost:3000' with your website's URL
  await page.goto('http://localhost:3000');

  // Wait for the privacy modal to appear
  await page.waitForSelector('#privacyModal');

  // Click the "I Disagree" button
  await Promise.all([
    page.waitForNavigation(),
    page.click('#disagreeButton')
  ]);

  // Check if the page has been redirected to 'https://github.com'
  const currentUrl = page.url();
  if (currentUrl === 'https://github.com/') {
    console.log('The "I Disagree" button is working correctly.');
  } else {
    console.error('The "I Disagree" button is not working.');
  }

  await browser.close();
})();