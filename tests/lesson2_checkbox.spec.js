const { test, expect } = require('@playwright/test');

test('checkboxes', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/checkboxes');
  const form = page.locator("#checkboxes input")
  const cb1 = form.nth(0);
  const cb2 = form.nth(1);

// >>>>> дополнить код здесь
  await cb1.check();
  await cb2.uncheck();
// <<<<<
  
await expect(cb1).toBeChecked()
await expect(cb2).not.toBeChecked()
});