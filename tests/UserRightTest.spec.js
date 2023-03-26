// @ts-check
const { test, expect } = require('@playwright/test');

test('User Rights', async ({ page }) => {
  await page.goto('http://localhost:3000/content.html');

  // Click the get started link.
  await page.getByRole('link', { name: 'User Rights' }).click();

});