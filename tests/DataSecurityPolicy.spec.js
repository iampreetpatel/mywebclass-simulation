// @ts-check
const { test, expect } = require('@playwright/test');

test('Data Security Policy for MyWebClass.org', async ({ page }) => {
  await page.goto('http://localhost:3000/content.html');

  // Click the get started link.
  await page.getByRole('link', { name: 'Data Security Policy for MyWebClass.org' }).click();

});