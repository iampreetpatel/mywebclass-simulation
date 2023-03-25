import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  //Accept Privacy Policy

  await page.goto('https://chunlohk.github.io/mywebclass-simulation/');
  await page.getByRole('button', { name: 'I Agree' }).click();

  //Ability to Select different languages: English, French, Spanish

  await page.getByText('Select Language:').click();
  await page.getByRole('combobox', { name: 'Select Language:' }).selectOption('fr');
  await page.getByRole('combobox', { name: 'Select Language:' }).selectOption('es');
  await page.getByRole('combobox', { name: 'Select Language:' }).selectOption('en');

  //Display Contact Us properly to have end-users to contact developer for accessibility issues or offer ideas to improve the website
  await page.getByRole('link', { name: 'Contact Us' }).click();
  await page.getByRole('heading', { name: 'Contact Us' }).click();

  //Verify fillable forms
  await page.getByLabel('Name:').click();
  await page.getByLabel('Name:').fill('John Doe');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('John Doe');
  await page.getByPlaceholder('123-456-7890').click();
  await page.getByPlaceholder('123-456-7890').fill('123-456-7890');
  await page.getByLabel('Express your needs:').click();
  await page.getByLabel('Express your needs:').fill('This is an area to impress your concern to improve accessibility!');

  //Verify Submit button trigger <mailto:> action
  await page.getByRole('button', { name: 'Submit' }).click();

 //Given user warning end-users they are leaving the website to go to their desire email app to send their emails
  await page.getByRole('heading', { name: 'The information you’re about to submit is not secure' }).click();
  await page.getByText('Because this form is being submitted using a connection that’s not secure, your information will be visible to others.').click();

  //Make sure Send anyway button is here to trigger email app launch
  await page.getByRole('button', { name: 'Send anyway' }).click();
});