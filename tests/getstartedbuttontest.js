const { test, expect } = require('@playwright/test');

test('Should navigate to another website when clicking the "Get Started" button', async ({ page }) => {
  // Navigate to the index.html page
  await page.goto('http://localhost:3000');

  // Verify that the title is "MyWebClass.org"
  await expect(page).toHaveTitle('MyWebClass.org');

  // Click the "Let's get Started!" button
  await page.click('button:has-text("Let\'s get Started!")');

  // Wait for the new page to load
  await page.waitForNavigation();

  // Verify that the current page is not the same as the original page
  const originalUrl = 'http://localhost:3000';
  const currentUrl = page.url();
  await expect(currentUrl).not.toEqual(originalUrl);
});