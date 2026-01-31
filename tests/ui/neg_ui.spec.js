import { test, expect } from '@playwright/test';

const testCases = [
    { id: 'Neg_UI_0001',
    name: 'A simple sentence + informal + present tense',
    input:"adha match eka balanna enavadha and what about the other's"},

];  

for (const tc of testCases) {
  test(`${tc.id} - ${tc.name}`, async ({ page }) => {

    await page.goto('https://swifttranslator.com');

    await page.fill('textarea', tc.input);

    // real-time translation
    await page.waitForTimeout(3000);

    const pageText = await page.textContent('body');
    expect(pageText).toMatch(/[\u0D80-\u0DFF]/);
  });
}    