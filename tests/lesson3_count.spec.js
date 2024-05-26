const { test, expect } = require('@playwright/test');

const url = (c) => `https://www.ebay.com/sch/i.html?_nkw=nike&_ipg=${c}`;

test("check elements count", async ({ page }) => {
  
    await page.goto(url(120));
  
    // >>>>> дополнить код здесь
    await expect(page.locator("li.s-item[data-gr4]")).toHaveCount(120);
    // <<<<<
  
    await page.goto(url(240));
    
    // >>>>> дополнить код здесь
    await expect(page.locator("li.s-item[data-gr4]")).toHaveCount(240);
    // <<<<<
  });