const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Replace 'http://localhost:3000' with your website's URL
  await page.goto('http://localhost:3000');

  // Wait for the privacy modal to appear
  await page.waitForSelector('#privacyModal');

  // Click the "I Agree" button
  await page.click('#agreeButton');

  // Check if the privacy modal is hidden
  const isModalVisible = await page.$eval('#privacyModal', (modal) => {
    return modal.classList.contains('show');
  });

  if (!isModalVisible) {
    console.log('The "I Agree" button is working correctly.');
  } else {
    console.error('The "I Agree" button is not working.');
  }

  await browser.close();
})();