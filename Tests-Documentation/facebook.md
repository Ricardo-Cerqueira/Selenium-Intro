## Test Case Documentation: Facebook Registration Form

### Objective:
The objective of this test case is to automate the registration process on the Facebook website by filling in the date of birth.

### Test Steps:
1. Launch the Chrome browser.
2. Navigate to the Facebook website ([http://www.facebook.com](http://www.facebook.com)).
3. Wait for the page to load successfully.
4. Click on the 'Cookies' button if it exists.
5. Wait for the registration form button to be clickable.
6. Click on the 'Criar nova conta' link (Create New Account).
7. Select the date of birth:
   - Select the day as the 7th option.
   - Select the month as "Set".
   - Select the year as "1990".
8. Verify that the registration process is successful.

### Test Data:
- URL: [http://www.facebook.com](http://www.facebook.com)
- Browser: Chrome
- Date of Birth:
  - Day: 7th option
  - Month: "Set"
  - Year: 1990

### Expected Result:
- The registration process should be completed successfully without any errors.

### Environment Setup:
- Selenium WebDriver for browser automation.
- Chrome browser.
- Node.js environment.

### Test File:
- [Facebook-JS-Test-Case](/Test-Cases\facebook-test.js)

### Test Code:
```javascript
const {Builder, By, Key, until} = require('selenium-webdriver');

async function exampleTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.facebook.com');
    console.log("Page loaded successfully.");
    await driver.sleep(3000);
    await driver.findElement(By.xpath("/html/body/div[3]/div[2]/div/div/div/div/div[4]/button[2]"));
    console.log("Clicked on 'cookies.");
    await driver.sleep(3000);

    // Wait for the registration form button to be clickable
    let registrationFormButton = await driver.wait(until.elementLocated(By.css("a[data-testid='open-registration-form-button']")), 10000);
    await driver.executeScript("arguments[0].click();", registrationFormButton);
    console.log("Clicked on 'Criar nova conta' link.");
    await driver.sleep(3000);
    
    let day1 = await driver.findElement(By.id("day"));
    await day1.click();
    await driver.sleep(1000); // Adding sleep to wait for the dropdown to appear
    await driver.findElement(By.css("option:nth-child(7)")).click(); // Clicking the 7th option

    let month_m = await driver.findElement(By.id("month"));
    await month_m.click();
    await driver.sleep(1000); // Adding sleep to wait for the dropdown to appear
    await driver.findElement(By.xpath("//option[text()='Set']")).click(); // Clicking the option with text "Sept"

    let year_y = await driver.findElement(By.id("year"));
    await year_y.click();
    await driver.sleep(1000); // Adding sleep to wait for the dropdown to appear
    await driver.findElement(By.css("option[value='1990']")).click(); // Clicking the option with value "1990"

    console.log("Test Passed!");
  } catch (error) {
    console.error("An error occurred:", error);
    console.log("Test Failed!");
  } finally {
    await driver.quit();
  }
}

exampleTest();

### Notes:
- This test case assumes the availability and stability of the Facebook website during the execution.
- Ensure proper internet connectivity for successful navigation to the Facebook website.
- The test might require adjustments if there are changes in the structure or behavior of the Facebook website.
- The current test case does not complete the registration process. 
- This is my first test case using selenium. 
