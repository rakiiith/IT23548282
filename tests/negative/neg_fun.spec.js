import { test, expect } from '@playwright/test';

const testCases = [
    { id: 'Neg_Fun_0001',
    name: 'A simple sentence + informal + present tense',
    input: 'ado mata adha campus enna venne nae ban' },

    { id: 'Neg_Fun_0002',
    name: 'A simple snetence + interrogative + present tense',
    input: 'Ara wade mokadha karanne machan?' },

    { id: 'Neg_Fun_0003',
    name: 'A present tense + plural + punctuation marks + multiple spaces',
    input: 'Adooooo   api set eka adha mokadha karanne?' },

    { id: 'Neg_Fun_0004',
    name: 'A simple sentence + mixed language + punctuation + line breaks',
    input: "poddak inna bn' 'mama check karala balannam" },

    { id: 'Neg_Fun_0005',
    name: 'A positive sentence + proper spacing',
    input: 'ara car eka niyamayi ban' },

    { id: 'Neg_Fun_0006',
    name: 'A present tense + mixed language + punctuation',
    input: "Hey aren't we gonna meetup tomorrow? heta set ekama gedhara inne" },

    { id: 'Neg_Fun_0007',
    name: 'A past tense + multiple spaces',
    input: 'Today when I was going home, vehicles 2k kudu venna vaedhuna ban.' },

    { id: 'Neg_Fun_0008',
    name: 'A simple sentence = interrogative + multi word',
    input: 'uba examekata readyyy dha bn?' },

    { id: 'Neg_Fun_0009',
    name: 'A informal phrasing + request + informal + slang',
    input: 'machan mata vaeda tika karaganna hodha ai model ekak dhaapankoo' },

    { id: 'Neg_Fun_0010',
    name: 'A mixed language + punctuation + compound sentence',
    input: "Hey how's your day going? matanan adha poddak aul." },

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
    