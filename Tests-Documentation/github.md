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
    // Test code goes here
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
