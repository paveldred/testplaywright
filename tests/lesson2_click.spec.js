const { test, expect } = require('@playwright/test');

test('click test', async ({ page }) => {
    await page.goto('http://uitestingplayground.com/click');
    
    // >>>>> дополнить код здесь
    await page.locator("#badButton").click();
    // <<<<<
    
    await expect(await page.locator("#badButton").getAttribute("class")).toMatch(/btn-success/);
  });

  test('checkbox and radio', async({page}) => {
    await page.goto('https://jqueryui.com/resources/demos/checkboxradio/default.html');
      
    // >>>>> дополнить код здесь
    await page.locator("[for=radio-1]").click();
    await page.locator("[for=checkbox-4]").click();
    await page.locator("[for=checkbox-nested-3]").click();
    await page.locator("[for=checkbox-nested-4]").click();
    // <<<<<
      
    await expect(page.locator("[for=radio-1]")).toHaveClass(/ui-checkboxradio-checked/);
    await expect(page.locator("[for=checkbox-4]")).toHaveClass(/ui-checkboxradio-checked/);
    await expect(page.locator("[for=checkbox-nested-3]")).toHaveClass(/ui-checkboxradio-checked/);
    await expect(page.locator("[for=checkbox-nested-4]")).toHaveClass(/ui-checkboxradio-checked/);
  });

  test('log in positive', async({page}) => {
    await page.goto('http://uitestingplayground.com/sampleapp');
      
    // >>>>> дополнить код здесь
    const login = "User123";
    const password = "pwd";

    await page.locator("[name=UserName]").fill(login);
    await page.locator("[name=Password]").fill(password);
    await page.locator("#login").click();

    // <<<<<
    await expect(await page.locator("#loginstatus").getAttribute("class")).toMatch(/text-success/);
    await expect(page.locator("#loginstatus")).toHaveText(`Welcome, ${login}!`);

  });
