const { chromium } = require('playwright');


(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.grameenphone.com/", {
        waitUntil: "domcontentloaded"
    });

    //await page.waitForTimeout(1000);
    await page.waitForSelector('svg.search_search_icon__RD3Nq');
    await page.click('svg.search_search_icon__RD3Nq');

    await page.waitForSelector('input[placeholder="Type to search"]');
    await page.fill('input[placeholder="Type to search"]', "online shop");

    await page.keyboard.press('Enter');

    


    //await browser.close();

})();