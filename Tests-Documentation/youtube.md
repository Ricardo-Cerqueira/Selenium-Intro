## Test Case Documentation: YouTube Search Functionality

### Objective:
The objective of this test case is to automate the search functionality on the YouTube website by searching for a specific video.

### Test Steps:
1. Launch the Chrome browser.
2. Navigate to the YouTube website ([http://www.youtube.com](http://www.youtube.com)).
3. Wait for the page to load successfully.
4. Click on the 'Cookies' button if it exists.
5. Wait for the search box to be visible and enabled.
6. Click on the search box.
7. Input the intended text to search (e.g., "Goku vs Jiren").
8. Click on the search button.

### Test Data:
- URL: [http://www.youtube.com](http://www.youtube.com)
- Browser: Chrome
- Search Query: "Goku vs Jiren"

### Expected Result:
- The search results for "Goku vs Jiren" should be displayed correctly, indicating that the search functionality is working as expected.

### Environment Setup:
- Selenium WebDriver for browser automation.
- Chrome browser.
- Node.js environment.

### Test File:
- [YouTube-Search-Test-Case](/Test-Cases/youtube-test.js)

### Test Code:
```javascript
const {Builder, By, Key, until} = require('selenium-webdriver');

async function youtubeTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.youtube.com');
    console.log("Page loaded successfully.");
    await driver.sleep(3000);

    // Clicking on cookies element
    const cookiesElement = await driver.wait(until.elementLocated(By.css('.yt-spec-touch-feedback-shape.yt-spec-touch-feedback-shape--touch-response-inverse')), 10000);
    console.log("Found element");
    await cookiesElement.click();
    console.log("Clicked on the element");
    await driver.sleep(3000);

    // Finding the search box 
    const searchBox = await driver.wait(until.elementLocated(By.xpath('/html/body/ytd-app/div[1]/div/ytd-masthead/div[4]/div[2]/ytd-searchbox/form/div[1]/div[1]')), 10000);
    await driver.wait(until.elementIsVisible(searchBox), 10000);
    await driver.wait(until.elementIsEnabled(searchBox), 10000);
    console.log("Found the search box");
    await driver.sleep(4000);
    await searchBox.click();
    console.log("Clicked on search box");

    // Input the intended text to search
    await searchBox.sendKeys('Goku vs Jiren');
    console.log("Input text successfully");

    // Clicking on search button
    const searchButton = await driver.wait(until.elementLocated(By.id('search-icon-legacy')), 10000);
    console.log("Found the search button");
    await searchButton.click();
    console.log("Clicked on search button");

    console.log("Test Passed!");
  } catch (error) {
    console.error("An error occurred:", error);
    console.log("Test Failed!");
  } finally {
    await driver.quit();
  }
}

youtubeTest();


### Notes:
- This test case assumes the availability and stability of the YouTube website during the execution.
- Ensure proper internet connectivity for successful navigation to the YouTube website.
- The test might require adjustments if there are changes in the structure or behavior of the YouTube website.
- This is a basic test case covering the search functionality. Additional tests can be implemented to cover more scenarios and edge cases.
- The test seems to be working, based on the logs I have introduced to debug. However, I am not fully convinced of the test cases success. I encountered some problems with the text input; therefore, Im not entirely sure its working properly and will need further investigation and knowledge I do not currently possess.