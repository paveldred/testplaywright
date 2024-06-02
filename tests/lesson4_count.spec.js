const { test, expect } = require('@playwright/test');

test('count test', async ({ page }) => {
  await page.goto('https://sky-todo-list.herokuapp.com/', {waitUntil: "networkidle"});
  const rows = await page.locator("td").count()
  console.log(rows)
});