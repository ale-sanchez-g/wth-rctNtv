import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:19006/');


  await page.waitForSelector('data-testid=cityBtn');
  await expect(page).toHaveScreenshot("LandingPage.png");

  // Click the get started link.
  await page.click('text=SYD');
  await page.waitForSelector('data-testid=weatherDisplayTest');

  await expect(page).toHaveScreenshot("WeatherDisplay.png");
});
