// @ts-check
const { test, expect } = require('@playwright/test');

test('MyWebClass.org | Content', async ({ page }) => {
  await page.goto('http://localhost:3000/content.html');

  // Click the get started link.
  await page.getByRole('link', { name: 'Cookie Consent' }).click();

});