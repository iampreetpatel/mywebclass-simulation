const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Replace 'http://localhost:3000' with your website's URL
  await page.goto('http://localhost:3000');

  // Wait for the privacy modal to appear
  await page.waitForSelector('#privacyModal');

  // Click the privacy policy link and wait for navigation
  await Promise.all([
    page.waitForNavigation(),
    page.click('#privacyModal .modal-body a[href="privacy.html"]'),
  ]);

  // Check if the page has been redirected to the privacy policy page
  const privacyPolicyUrl = page.url();
  if (privacyPolicyUrl.endsWith('/privacy.html')) {
    console.log('The privacy policy link is working correctly.');
  } else {
    console.error('The privacy policy link is not working.');
  }

  // Go back to the main page
  await page.goBack();

  // Wait for the privacy modal to reappear
  await page.waitForSelector('#privacyModal');

  // Click the contact us link and wait for navigation
  await Promise.all([
    page.waitForNavigation(),
    page.click('#privacyModal .modal-body a[href="contact.html"]'),
  ]);

  // Check if the page has been redirected to the contact us page
  const contactUsUrl = page.url();
  if (contactUsUrl.endsWith('/contact.html')) {
    console.log('The contact us link is working correctly.');
  } else {
    console.error('The contact us link is not working.');
  }

  await browser.close();
})();