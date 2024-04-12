const { test, expect } = require('@playwright/test');

test('screenshot', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/sampleapp');
  
  await page.locator("body").screenshot({path: "body.png"})
  await page.locator(".container").nth(0).screenshot({path: "container.png"})

});