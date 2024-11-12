const { chromium } = require('playwright');


(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();


//code here
 //step 1 : Login 
 await page.goto("https://www.saucedemo.com/");
 await page.waitForTimeout(1000);
 await page.fill("#user-name", "standard_user");
 await page.waitForTimeout(1000);

 await page.fill("#password", "secret_sauce");
 await page.waitForTimeout(1000);

 await page.click("#login-button");
 await page.waitForTimeout(1000);

 //Login or Not 
 await expect (page).toHaveURL("https://www.saucedemo.com/inventory.html");
 await page.waitForTimeout(1000);
 console.log("Successfully logged in");
 // const text = await page.textContent("body");
 // if (text.includes("Products")) {
 //     console.log("Successfully logged in");

 // }
 // else {
 //     console.log("Login failed");
 // }

 //Step 2 : Add product to cart
 // await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');
 // await page.waitForTimeout(1000);

 const itemCount = await page.textContent('.shopping_cart_badge');

 console.log('Total items in cart:', itemCount); // Show item count


 //Step 3: Go To the Cart

 await page.click(".shopping_cart_link");
 await page.waitForTimeout(1000);

 //Step 4 : Checkout
 await page.click('button[data-test="checkout"]');
 await page.waitForTimeout(1000);

 //Step 5 : Fill out Information 
 await page.fill("#first-name", "Ehsan");
 await page.waitForTimeout(1000);

 await page.fill("#last-name", "Ananno");
 await page.waitForTimeout(1000);

 await page.fill('input[data-test="postalCode"]', "1229");
 await page.waitForTimeout(1000);


 //Step 6 : Continue and Finish
 await page.click('input[data-test="continue"]');
 await page.waitForTimeout(1000);

 await page.click('button[data-test="finish"]');
 await page.waitForTimeout(1000);




 //Step 7 : Logout
 await page.click('#react-burger-menu-btn');
 await page.waitForTimeout(1000);

 await page.click('#logout_sidebar_link');
 await page.waitForTimeout(1000);

 await browser.close();


})();
