//IT23428942 - ITPM assignment

const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    // Simple Sentences
    {
  tcId: 'Pos_Fun_0001',
  name: 'Convert simple present tense daily statement',
  input: 'mama office yanne',
  expected: 'මම ඔෆිස් යන්නේ',
  category: 'Daily language usage',
  grammar: 'Simple present tense',
  length: 'S'
}
,
    {
  tcId: 'Pos_Fun_0002',
  name: 'Convert interrogative daily question',
  input: 'mama bath oyaa adha enne kawadhadha?',
  expected: 'ඔයා අද එන්නේ කවදාද?',
  category: 'Simple Future tense',
  grammar: 'Present continuous tense',
  length: 'S'
}
,
    {
  tcId: 'Pos_Fun_0003',
  name: 'Convert polite request sentence',
  input: 'karunaakaralaa mata podi udhavvak karanna puLuvandha?',
  expected: 'කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?',
  category: 'Future intent expression',
  grammar: 'Future tense',
  length: 'M'
}
,
    
    {
  tcId: 'Pos_Fun_0004',
  name: 'Convert Convert compound sentence with conjunction',
  input: 'mama udhaesanama office yanna kalin bath kanna hadhanne saha passe bus eka allagena town eka langa thiyena bank ekaṭa gihilla podi vaedak karala evening wela gedhara enna hithan inne',
  expected: 'මම උදේසනම ඔෆිස් යන්න කලින් බත් කන්න හදන්නේ සහ පස්සේ බස් එක අල්ලගෙන ටවුන් එක ලඟ තියෙන බැංකුවට ගිහිල්ලා පොඩි වැඩක් කරලා ඉවනිං වෙලා ගෙදර එන්න හිතන් ඉන්නේ',
  category: 'Past action conversion',
  grammar: 'Past tense',
  length: 'L'
},
    {
  tcId: 'Pos_Fun_0005',
  name: 'Convert negative form statement',
  input: 'oya kohomadmata eeka karanna bae',
  expected: 'මට ඒක කරන්න බැහැ?',
  category: 'Interrogative sentences',
  grammar: 'Question form',
  length: 'S'
},
    
    {
  tcId: 'Pos_Fun_0006',
  name: 'Convert future tense planning sentence',
  input: 'api heta trip ekak yamu',
  expected: 'අපි හෙට ට්‍රිප් එකක් යමු',
  category: 'Negative sentence conversion',
  grammar: 'Present tense – negative',
  length: 'S'
}
,
    
    // Questions
    {
  tcId: 'Pos_Fun_0007',
  name: 'Convert sentence with repeated word emphasis',
  input: 'shaa shaa  hari lassanai',
  expected: 'ශා ශා හරි ලස්සනයි',
  category: 'Polite expressions',
  grammar: 'Imperative polite form',
  length: 'S'
}
,
    {
  tcId: 'Pos_Fun_0008',
  name: 'Convert sentence with place name',
  input: 'api Colombo yanna hadhanne traffic nisaa',
  expected: 'අපි කොළඹ යන්න හදන්නේ ට්‍රැෆික් නිසා',
  category: 'Past continuous actions',
  grammar: 'Past continuous tense',
  length: 'S'
}
,
    {
  tcId: 'Pos_Fun_0009',
  name: 'Convert past tense personal action',
  input: 'mama iiyee paasal giyaa',
  expected: 'මම ඊයේ පාසල් ගියා',
  category: 'Future planning statements',
  grammar: 'Future tense',
  length: 'S'
},
    
    // Commands
    {
  tcId: 'Pos_Fun_0010',
  name: 'Convert present continuous activity',
  input: 'mama dhaen vaeda karamin inne',
  expected: 'මම දැන් වැඩ කරමින් ඉන්නේ',
  category: 'Command sentences',
  grammar: 'Imperative form',
  length: 'S'
}
,
    {
  tcId: 'Pos_Fun_0011',
  name: 'CConvert imperative command',
  input: 'issarahata yanna',
  expected: 'ඉස්සරහට යන්න',
  category: 'Negative past actions',
  grammar: 'Past tense – negative',
  length: 'S'
}
,
    
    // Greetings and Responses
    {
  tcId: 'Pos_Fun_0012',
  name: 'Convert suggestion sentence',
  input: 'api movie ekak balamu',
  expected: 'අපි මූවි එකක් බලමු',
  category: 'Suggestions',
  grammar: 'Suggestion form',
  length: 'S'
}
,
    {
  tcId: 'Pos_Fun_0013',
  name: 'Convert ability statement',
  input: 'mata swim karanna puluwan',
  expected: 'මට පිහිනන්න පුළුවන්',
  category: 'Ability expressions',
  grammar: 'Ability modal form',
  length: 'S'
}
,
    
    // Tense Variations
    {
  tcId: 'Pos_Fun_0014',
  name: 'Convert obligation sentence',
  input: 'mata wada karanna ona',
  expected: 'මට වැඩ කරන්න ඕන',
  category: 'Obligation expressions',
  grammar: 'Obligation modal form',
  length: 'S'
}
,
    {
  tcId: 'Pos_Fun_0015',
  name: 'Convert conditional statement',
  input: 'wessa weoth mama enne na',
  expected: 'වැස්ස වුණොත් මම එන්නේ නැහැ',
  category: 'Conditional sentences',
  grammar: 'Conditional form',
  length: 'M'
},
    
    // Negations
    {
  tcId: 'Pos_Fun_0016',
  name: 'Convert reason sentence',
  input: 'mata sathuta nae nisa mama enne na',
  expected: 'මට සතුට නැති නිසා මම එන්නේ නැහැ',
  category: 'Reason and cause',
  grammar: 'Causal sentence form',
  length: 'L'
}

,
    {
  tcId: 'Pos_Fun_0017',
  name: 'Convert time-based statement',
  input: 'mama udeta awilla inne',
  expected: 'මම උදේට ඇවිල්ලා ඉන්නවා',
  category: 'Time-based expressions',
  grammar: 'Present perfect continuous sense',
  length: 'M'
}
,
    
    // Plural and Pronouns
   {
  tcId: 'Pos_Fun_0018',
  name: 'Convert comparison sentence',
  input: 'eka anith eka wada hondai',
  expected: 'එක අනිත් එකට වඩා හොඳයි',
  category: 'Comparisons',
  grammar: 'Comparative form',
  length: 'S'
}
,
    
    // Word Combinations
    {
  tcId: 'Pos_Fun_0019',
  name: 'Convert sentence with English technical term',
  input: 'karuNaakaralaa mage email eka check karala adha meeting ekaṭa adhaalawa thiyena Zoom link eka mama office yanna kalin mata WhatsApp karanna puLuvannam loku udhavvak wenavaa',
  expected: 'කරුණාකරලා මගේ email එක check කරලා අද meeting එකට අදාලව තියෙන Zoom link එක මම ඔෆිස් යන්න කලින් මට WhatsApp කරන්න පුළුවන්නම් ලොකු උදව්වක් වෙනවා',
  category: 'Habitual actions',
  grammar: 'Simple present habitual',
  length: 'L'
}
,
    
    // Mixed Language
    {
  tcId: 'Pos_Fun_0020',
  name: 'Convert warning sentence',
  input: 'ehema karoth hari nae',
  expected: 'එහෙම කළොත් හරි නැහැ',
  category: 'Warnings',
  grammar: 'Conditional warning form',
  length: 'S'
},
    {
  tcId: 'Pos_Fun_0021',
  name: 'Convert invitation sentence',
  input: 'oya api ekka enawada',
  expected: 'ඔයා අපි එක්ක එනවද?',
  category: 'Invitations',
  grammar: 'Interrogative invitation form',
  length: 'S'
}
,
    
    {
  tcId: 'Pos_Fun_0022',
  name: 'Convert very long paragraph-style input with mixed language, opinions, and explanations',
  input: 'adha kaalayee technology saha internet use eka bohoma vedagath deyak wela thiyenavaa kiyala api okkoma danne. kalin api vaeda karala thiyenne office ekakata gihilla, files aran, meetings face to face karala namuth dhaen ehema nemei. covid kaalayen passe remote vaeda saha online meeting culture eka hariyata popular vuna. bohoma aya gedharin inna gaththaa, laptop eka saha WiFi use karala daily vaeda tika karanna patangaththaa.                                                                              me widihakata vaeda karaddi benefits bohoma thiyenavaa. travel karanna onae naehae, traffic stress naehae, time save wenavaa saha family ekkath samaga inna puluvan kaalaya adika wenavaa. ehema vunath problemsuth thiyenavaa. internet stability honda naththang meeting waladi issues aethivenavaa. Zoom, Teams vagee platforms waladi audio disconnect wena eka, video freeze wena eka saha messages late wenavaa kiyala complaints bohoma thiyenavaa.                                                        eka vitharak nemei, communication clarity hari vedagath wenavaa. office environment ekak naththama team ekka coordination eka adu wenna puluvan. samahara employees la emails, WhatsApp messages saha task updates hariyata balanne naehae kiyala managers la complain karanavaa. ehema nisaa companies la dhaen hybrid work model ekakata yanavaa. samahara dawas waladi office enna, samahara dawas waladi home inna kiyala rules introduce karanavaa.                                                 future eka gana kathaa karaddi, technology thava godak advance wenavaa kiyala hithanna puluvan. AI, automation saha cloud systems use karala vaeda karana widihak thava efficient wenavaa. namuth ehema technology use karanavaa kiyala human communication saha teamwork eka adu wenna dhenna epa. balance ekak thiyenna ona kiyala bohoma aya hithanavaa.',
  expected: 'අද කාලයේ technology සහ internet use එක බොහෝම වැදගත් දෙයක් වෙලා තියෙනවා කියලා අපි ඔක්කොම දන්නෙ. කලින් අපි වැඩ කරලා තියෙන්නේ office එකකට ගිහිල්ලා, files අරන්, meetings face to face කරලා නමුත් දැන් එහෙම නෙමෙයි. covid කාලයෙන් පස්සේ remote වැඩ සහ online meeting culture එක හරිට popular වුණා. බොහෝම අය ගෙදරින් ඉන්න ගත්ත, laptop එක සහ WiFi use කරලා daily වැඩ ටික කරන්න පටන් ගත්තා.මේ විදිහට වැඩ කරද්දී benefits බොහෝම තියෙනවා. travel කරන්න ඕනෑ නැහැ, traffic stress නැහැ, time save වෙනවා සහ family එකත් සමග ඉන්න පුළුවන් කාලය වැඩි වෙනවා. එහෙම වුණත් problemsත් තියෙනවා. internet stability හොඳ නැත්තං meeting වලදී issues ඇති වෙනවා. Zoom, Teams වගේ platforms වලදී audio disconnect වෙන එක, video freeze වෙන එක සහ messages late වෙනවා කියලා complaints බොහෝම තියෙනවා.එක විතරක් නෙමෙයි, communication clarity හරි වැදගත් වෙනවා. office environment එකක් නැත්තම team එකක් එක්ක coordination එක අඩු වෙන්න පුළුවන්. සමහර employees ලා emails, WhatsApp messages සහ task updates හරිට බලන්නේ නැහැ කියලා managers ලා complain කරනවා. එහෙම නිසා companies ලා දැන් hybrid work model එකකට යනවා. සමහර දවස් වලදී office එන්න, සමහර දවස් වලදී home ඉන්න කියලා rules introduce කරනවා.future එක ගැන කතා කරද්දී, technology තව ගොඩක් advance වෙනවා කියලා හිතන්න පුළුවන්. AI, automation සහ cloud systems use කරලා වැඩ කරන විදිහ තව efficient වෙනවා. නමුත් එහෙම technology use කරනවා කියලා human communication සහ teamwork එක අඩු වෙන්න දෙන්න එපා. balance එකක් තියෙන්න ඕන කියලා බොහෝම අය හිතනවා.',
  category: 'Refusals',
  grammar: 'Negative ability form',
  length: 'L'
},
    
   {
  tcId: 'Pos_Fun_0023',
  name: 'Convert sentence with joined words stress input',
  input: 'mamaadhaofficeyannabahaithinnene',
  expected: 'මම අද ඔෆිස් යන්න බැහැයි තියෙන්නේ',
  category: 'Disagreements',
  grammar: 'Lack of Affirmative response',
  length: 'S'
}
,
    
    // Medium Length
    {
  tcId: 'Pos_Fun_0024',
  name: 'Convert polite command with emphasis',
  input: 'karunaakaralaa eeka dhaenma dhenna',
  expected: 'කරුණාකරලා ඒක දැන්ම දෙන්න',
  category: 'Emotional expressions',
  grammar: 'Adjectival expression',
  length: 'S'
}
,


  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_001',
      name: 'Incorrect handling of excessive joined words',
      input: 'mamagedharayannabathkannoneekaelinnene',
      expected: 'මම ගෙදර යන්න බත් කන්න ඕන එක එළින්නේ',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'Joined compound words',
      input: 'apipassekathakaramu',
      expected: 'අපි පස්සේ කතා කරමු',
      category: 'Typographical error handling',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_003',
      name: 'Mixed spacing issues',
      input: 'mata     oonee  eeka',
      expected: 'මට ඕනෑ ඒක',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_004',
      name: 'Line break in sentence',
      input: 'මම ගෙදර යනවා කමල්ටත් කියන්න',
      expected: 'මම යනවම්\nගෙදර',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_005',
      name: 'Informal slang phrase',
      input: 'machaang supiriyaane',
      expected: 'මචාන්ග් සුපිරියානෙ',
      category: 'Slang / informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_006',
      name: 'Colloquial expression',
      input: 'adooo mokakkdha mee',
      expected: 'අඩෝඕ මොකක්ක්ද මේ',
      category: 'Slang / informal language',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_007',
      name: 'Mixed English with errors',
      input: 'mamaWhatsAppekagiyaa',
      expected: 'මම WhatsApp එකගියා',
      category: 'Mixed Singlish + English',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_008',
      name: 'Abbreviation in sentence',
      input: 'mata ASAP eeka oonee',
      expected: 'මට ASAP ඒක ඕනෑ',
      category: 'Names / places / common English words',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_009',
      name: 'Question with spacing error',
      input: 'oyaakohedhainnee',
      expected: 'ඔයා කොහෙද ඉන්නේ',
      category: 'Typographical error handling',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_010',
      name: 'Complex slang statement',
      input: 'eyi bro eeka set karala denna',
      expected: 'එයි bro ඒක set කරල දෙන්න',
      category: 'Slang / informal language',
      grammar: 'Imperative (command)',
      length: 'S'
    }
  ],
  
  ui: {
    tcId: 'Pos_UI_001',
    name: 'Real-time translation updates as typing',
    input: 'mama kaeema kannavaa',
    partialInput: 'mama kae',
    expectedFull: 'මම කෑම කන්නවා',
    category: 'Usability flow',
    grammar: 'Present tense',
    length: 'S'
  }
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
