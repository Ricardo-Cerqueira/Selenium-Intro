const {Builder, By, Key, until} = require('selenium-webdriver');

async function youtubeTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.manage().window().maximize();
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
    const searchBox = await driver.findElement(By.xpath('/html/body/ytd-app/div[1]/div/ytd-masthead/div[4]/div[2]/ytd-searchbox')).click();
    console.log("clicked on box");
    await driver.sleep(4000);

    //Input the intendend text to search
    await driver.findElement(By.xpath('/html/body/ytd-app/div[1]/div/ytd-masthead/div[4]/div[2]/ytd-searchbox/form/div[1]/div[1]/div/div[2]/input')).sendKeys('Goku vs Jiren');
    console.log("Input text successfully");

    // clicking on search button
    await driver.findElement(By.id('search-icon-legacy')).click();
    console.log("clicked on search button");
    await driver.sleep(10000);

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

