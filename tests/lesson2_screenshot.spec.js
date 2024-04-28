const { test, expect } = require('@playwright/test');
const fs = require('fs');


test('screenshot', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/sampleapp');
  
  await page.locator("body").screenshot({path: "body.png"});
  await page.locator(".container").nth(0).screenshot({path: "container.png"});

  await expect(page.locator("#updatingButton")).toHaveText("AbcAbcAbc")
  await expect(page.locator("#updatingButton")).toHaveText("AbcAbcAbc")

  expect(fs.existsSync('body.png')).toBe(true)
  expect(fs.existsSync('container.png')).toBe(true)


});