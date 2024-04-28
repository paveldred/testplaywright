const { test, expect } = require('@playwright/test');

test('url and title', async({ page }) => {
    await page.goto("https://inzhenerka.tech");

    await expect(page.locator("[field=descr]").first()).toHaveText('Помогаем инженерам повысить свою квалификацию на рынке труда и приобрести навыки международного уровня');
    await expect(page.locator("h1")).toContainText('ИнженеркаТех');

})