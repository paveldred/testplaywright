const { test, expect } = require('@playwright/test');

test('zoom page', async ({ page }) => {
    await page.goto('http://uitestingplayground.com/textinput');
    await page.locator("#newButtonName").fill("Abc")
    await page.locator("#newButtonName").press('Meta+A');
    await page.locator("#newButtonName").press('Meta+X');
    for (let i = 0; i < 3; i++) {
        await page.locator("#newButtonName").press('Meta+V');
    };
  
    await page.locator("#updatingButton").click()
    await expect(page.locator("#updatingButton")).toHaveText("AbcAbcAbc")
  
});