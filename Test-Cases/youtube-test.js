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
    const searchBox = await driver.wait(until.elementLocated(By.xpath('/html/body/ytd-app/div[1]/div/ytd-masthead/div[4]/div[2]/ytd-searchbox/form/div[1]/div[1]')), 10000);
    await driver.wait(until.elementIsVisible(searchBox), 10000);
    await driver.wait(until.elementIsEnabled(searchBox), 10000);
    console.log("Found the search box");
    await driver.sleep(4000);
    await searchBox.click();
    console.log("clicked on box");

    //Input the intendend text to search
    await driver.executeScript("arguments[0].value = 'Goku vs Jiren'", searchBox);
    console.log("Input text successfully");

    // clicking on search button
    const searchButton = await driver.wait(until.elementLocated(By.id('search-icon-legacy')), 10000);
    console.log("Found the search button");
    await searchButton.click();
    console.log("clicked on search button");

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

