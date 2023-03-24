const { chromium } = require('playwright')

;(async () => {
  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()

  // Replace 'http://localhost:3000' with your website's URL
  await page.goto('http://localhost:3000')

  // Wait for the privacy modal to appear
  await page.waitForSelector('#privacyModal')

  // Get the email link's href attribute
  const emailLinkHref = await page.$eval(
    '#privacyModal .modal-body a[href^="mailto:"]',
    (el) => el.getAttribute('href')
  )

  // Check if the email link has the correct format and destination
  const expectedEmailLink = 'mailto:cyl4@njit.edu'
  if (emailLinkHref === expectedEmailLink) {
    console.log('The developer email link is correctly formatted.')
  } else {
    console.error('The developer email link is not correctly formatted.')
  }

  await browser.close()
})()