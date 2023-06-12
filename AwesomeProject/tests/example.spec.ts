import { test, expect } from '@playwright/test';
const weatherDisplayTest = {
  "cod": "200",
  "message": 0,
  "cnt": 1,
  "list": [
      {
          "dt": 1686096000,
          "main": {
              "temp": 285.97,
              "feels_like": 285.55,
              "temp_min": 285.97,
              "temp_max": 290.05,
              "pressure": 1027,
              "sea_level": 1027,
              "grnd_level": 1024,
              "humidity": 86,
              "temp_kf": -4.08
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 75
          },
          "wind": {
              "speed": 2.8,
              "deg": 9,
              "gust": 5.19
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2023-06-07 00:00:00"
      }
  ],
  "city": {
      "id": 2161251,
      "name": "ALEJANDRO",
      "coord": {
          "lat": -33.86,
          "lon": 151.21
      },
      "country": "AU",
      "population": 3483,
      "timezone": 36000,
      "sunrise": 1686084879,
      "sunset": 1686120803
  }
};
test.beforeEach(async ({ context }) => {
  // mock the response of the weather api
  await context.route('**/data/2.5/forecast**', route => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(weatherDisplayTest),
    });
  });
});

test('get started link', async ({ page }) => {

  
  await page.goto('http://localhost:19006/');


  await page.waitForSelector('data-testid=cityBtn');
  await expect(page).toHaveScreenshot("LandingPage.png");

  // Click the get started link.

  await page.click('text=SYD');
  await page.waitForSelector('data-testid=weatherDisplayTest');

  await expect(page).toHaveScreenshot("WeatherDisplay.png");
});
