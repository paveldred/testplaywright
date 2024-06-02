const { test, expect } = require('@playwright/test');

test('count test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/', {waitUntil: "networkidle"});

    const login = "standard_user";
    const password = "secret_sauce";

    await page.getByPlaceholder("Username").fill(login);
    await page.getByPlaceholder("Password").fill(password);

    await page.locator("#login-button").click();

    //Проверить, что url страницы, после клика = "https://www.saucedemo.com/inventory.html"
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');


});