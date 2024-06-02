const { test, expect } = require('@playwright/test');

test('count test', async ({ page }) => {
  await page.goto('https://www.litres.ru/', {waitUntil: "networkidle"});

    const searchText = "javascript";
    await page.getByTestId("search__input").click
    await page.getByTestId("search__input").fill(searchText);
    await page.getByTestId("search__button").click();

    //Проверить, что url страницы, после клика = "https://www.saucedemo.com/inventory.html"
    await expect(page.getByTestId("search-title__wrapper")).toHaveText(`Результаты поиска «${searchText}»`)

});