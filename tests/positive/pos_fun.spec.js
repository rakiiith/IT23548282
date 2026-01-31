import { test, expect } from '@playwright/test';

const testCases = [
  { id: 'Pos_Fun_0001',
    name: 'Convert a short daily greeting phrase',
    input: 'oyaalaa adha mokadha karanne?' },

  { id: 'Pos_Fun_0002',
    name: 'Translate a Long mixed-language input with slang + typo causes incorrect conversion question about well-being',
    input: 'machan ubata puluvandha mage lap ekata windows 11 install karalaa dhenna. Can you please install it before Friday? ubata puluvan ikmanata install karalaa dhenna. Install karalaa mata whtsp message ekak dhaapanko. you'},

  { id: 'Pos_Fun_0003',
    name: 'Convert a short request phrase',
    input: 'machan ubata puluvandha ena gaman bath packet ekak aran enna?ata windows 11 install karalaa dhenna. Can you please install it before Friday? ubata puluvan ikmanata install karalaa dhenna. Install karalaa mata whtsp message ekak dhaapanko.' },

  { id: 'Pos_Fun_0004',
    name: 'Convert a simple sentence',
    input: 'mama gedhara yanavaa.' },

  { id: 'Pos_Fun_0005',
    name: 'Convert a text with slang + mixed language',
    input: 'adoo madam apita dhunna homework tika karaadha ubalaa?' },

   { id: 'Pos_Fun_0006',
    name: 'A positive greeting + day to day expression',
    input: 'oya adha lassanayi' }, 
   
   { id: 'Pos_Fun_0007',
    name: 'A positive + present + greeting',
    input: 'heta edhdhi anivaaren oyagee part eka ivara karagena enna' },
    
   { id: 'Pos_Fun_0008',
    name: 'A joined + present + negation',
    input: 'adha mama cricket gahanna enneenaee' },
    
  { id: 'Pos_Fun_0009',
    name: 'A repeated + informal + daily language',
    input: 'hari hari mama aayeth try karala balannam' }, 

   { id: 'Pos_Fun_0010',
    name: 'A present tense + plural + casual request + mixed language',
    input: 'machan adha api match ekak gahamudha?' },
    
   { id: 'Pos_Fun_0011',
    name: 'A brand name + slang',
    input: 'ado mata Whatsapp call ekak ganinko' },
    
   { id: 'Pos_Fun_0012',
    name: 'A response + muti language + fututre tense',
    input: 'hari ban mama ubata heta edhdhi notes tika aran ennam' },
    
   { id: 'Pos_Fun_0013',
    name: 'A positive greeting',
    input: 'oya adha lassanayi' },
    
   { id: 'Pos_Fun_0014',
    name: 'A common gretting + informal phrasing',
    input: 'adha moko venne ban' },
    
   { id: 'Pos_Fun_0015',
    name: 'A polite + request',
    input: 'mata podi udhavvak karanna puluvanda?' },
    
   { id: 'Pos_Fun_0016',
    name: 'A past tense + singular',
    input: 'mama iiyee thamayi bodimata aavee' },
    
   { id: 'Pos_Fun_0017',
    name: 'English abbreviations  + negative form',
    input: 'machan mage ID eka naethi vunaanee' },
    
   { id: 'Pos_Fun_0018',
    name: 'A informal + multi word expression + punctuation marks + time formats + short forms',
    input: 'poddak inna bosaa, mata 5 min dhenna mama check karala balannam' },
    
   { id: 'Pos_Fun_0019',
    name: 'A place + present tense',
    input: 'adha mama Colombo giya podi vaeda vagayak karaganna' },
    
   { id: 'Pos_Fun_0020',
    name: 'Long mixed-language input with slang + typo causes incorrect conversion + currency ',
    input: "ado mata Rs 1000k nayata dhenna puluvandha? mama ubata salli tika Monday vedhdhi dhennam. I'm going through a lot right now ban."},
    
   { id: 'Pos_Fun_0021',
    name: 'A colloquial + multiple spaces',
    input: 'Adooo   mama gym gihillaa 15kg adu kara gattaa.' },
    
   { id: 'Pos_Fun_0022',
    name: 'A present tense + short forms + dates',
    input: "mage b'day eka vatennee April 28."},
    
   { id: 'Pos_Fun_0023',
    name: 'A informal + punctuation + medium length +without spaces',
    input: 'mee arayaa oyaata message ekak dhaalalu adha meeting eka thiyanna vennenaeekiyalaa. Oyaa dhaekkee naedhdha?' },
    
   { id: 'Pos_Fun_0024',
    name: 'A multi - word expression + mixed language + punctuation',
    input: "oyaa mata adha loku udhavvak karalaa dhunne, thank you!"},
    
    



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