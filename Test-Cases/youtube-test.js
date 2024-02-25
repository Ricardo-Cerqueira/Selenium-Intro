const {Builder, By, Key, until} = require('selenium-webdriver');

async function youtubeTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.youtube.com');
    console.log("Page loaded successfully.");
    await driver.sleep(3000);

    // clicking on cookies element
    const cookiesElement = await driver.wait(until.elementLocated(By.css('.yt-spec-touch-feedback-shape.yt-spec-touch-feedback-shape--touch-response-inverse')), 10000);
    console.log("Found element");
    await cookiesElement.click();
    console.log("Clicked on the element");
    await driver.sleep(3000);

    // Finding the search ID 
    const searchBox = await driver.wait(until.elementLocated(By.id('search')), 10000);
    console.log("Found the search box");
    await driver.sleep(4000);
    
    //Input the intendend text to search
    await driver.executeScript("arguments[0].value = 'Goku vs Jiren'", searchBox);
    console.log("Input text sucessfully");

    /* Submit the form (optional)
        await searchBox.sendKeys(Key.ENTER);
        We won't be using this aproach, because we want to test the search button, making our test more roboust.
    */

    console.log("Test Passed!");
} catch (error) {
    console.error("An error occurred:", error);
    console.log("Test Failed!");
  } finally {
    await driver.quit();
  }
}

youtubeTest();
