const { test, expect } = require('@playwright/test');

test('get image caption', async ({ page }) => {
    await page.goto('http://the-internet.herokuapp.com/hovers');
    await page.locator(".figure").nth(1).hover()
    await expect(page.locator('xpath=//*[@id="content"]/div/div[1]/div/h5')).toHaveText("name: user1");
    await expect(page.locator('xpath=//*[@id="content"]/div/div[1]/div/a')).toHaveText("View profile");
    await expect(page.getByText('View profile')).toBeVisible();
});