## Test Case Documentation: GitHub User Search Functionality

### Objective:
The objective of this test case is to automate the user search functionality on the GitHub website by searching for a specific user and navigating to their profile.

### Test Steps:
1. Launch the Chrome browser.
2. Navigate to the GitHub website ([http://www.github.com](http://www.github.com)).
3. Wait for the page to load successfully.
4. Click on the search box.
5. Type "Ricardo-Cerqueira" on the search box.
6. Click on the search box to search.
7. Click on the "Users" option.
8. Click on "Ricardo Cerqueira" hyper-link text.

### Test Data:
- **URL:** [http://www.github.com](http://www.github.com)
- **Browser:** Chrome
- **Search Query:** "Ricardo-Cerqueira"

### Expected Result:
- The profile page for the user "Ricardo Cerqueira" should be displayed correctly, indicating that the user search functionality is working as expected.

### Environment Setup:
- **Selenium WebDriver** for browser automation.
- **Chrome browser**.
- **Node.js environment**.

### Test File:
- [GitHub-User-Search-Test-Case](/Test-Cases/github-test.js)

### Test Code:
```javascript
const {Builder, By, Key, until} = require('selenium-webdriver');

async function gitHubTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
        
    await driver.manage().window().maximize();
    await driver.get('http://www.github.com');
    console.log("Page loaded successfully.");
    await driver.sleep(3000);

    // Finding the search ID 
    await driver.findElement(By.className("search-input")).click();
    console.log("clicked on box");
    await driver.sleep(4000);
    await driver.findElement(By.id('query-builder-test')).sendKeys('Ricardo-Cerqueira');
    console.log("typed text");
    await driver.sleep(4000);
    await driver.findElement(By.xpath("/html/body/div[1]/div[1]/header/div/div[2]/div/div/qbsearch-input/div[1]/div/modal-dialog/div/div/div/form/query-builder/div[1]/div[2]/ul")).click();
    await driver.sleep(4000);

    // Select the Users option
    await driver.findElement(By.xpath('/html/body/div[1]/div[4]/main/react-app/div/div/div[1]/div/div/div[1]/div[2]/div/div/div/div/ul/li[1]/ul/li[6]/a/div/div/span[1]')).click();
    console.log("selected user sucessfully");
    await driver.sleep(4000);
    // select Ricardo Cerqueira profile
    await driver.findElement(By.xpath('/html/body/div[1]/div[4]/main/react-app/div/div/div[1]/div/div/div[2]/div[2]/div/div[1]/div[4]/div/div/div/div/div[1]/div[2]/h3/div/a[1]/span')).click();
    await driver.sleep(4000);
    
    console.log("Test Passed!");
} catch (error) {
    console.error("An error occurred:", error);
    console.log("Test Failed!");
  } finally {
    await driver.quit();
  }
}

gitHubTest();

### Notes:
- This test case assumes the availability and stability of the GitHub website during the execution.
- Ensure proper internet connectivity for successful navigation to the GitHub website.
- The test might require adjustments if there are changes in the structure or behavior of the GitHub website.
