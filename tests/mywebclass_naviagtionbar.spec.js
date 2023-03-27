// @ts-check
const { test, expect } = require('@playwright/test')

test('Website contains navbar', async ({ page }) => {
  await page.goto('http://localhost:3000')
  const navbar = await page.waitForSelector('nav')
  expect(navbar).not.toBeNull()
})
