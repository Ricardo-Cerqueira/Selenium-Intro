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

