const { test, expect } = require('@playwright/test');

test('Check books page', async ({ page }) => {
    await page.goto('https://boris911-library.onrender.com');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  