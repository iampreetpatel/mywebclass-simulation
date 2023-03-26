// @ts-check
const { test, expect } = require('@playwright/test');

test('Data Security Policy for MyWebClass.org', async ({ page }) => {
  await page.goto('http://localhost:3000/content.html');

  // Verify that the page title is correct.
  const pageTitle = await page.title();
  expect(pageTitle).toBe('MyWebClass.org | Content');

  // Click the link with the given name.
  const link = await page.getByRole('link', { name: 'Data Security Policy for MyWebClass.org' });
  await link.click();

  // Wait for the section to be visible.
  await page.waitForSelector('#section3');

  // Verify that the URL has a hash that points to #section3.
  const url = await page.url();
  expect(url).toContain('#section3');
});
