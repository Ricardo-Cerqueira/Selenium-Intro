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