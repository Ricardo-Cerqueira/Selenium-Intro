const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Facebook Registration form test-case', function() {
    it('should change the date to 7, September 1990 on Facebook registration form', async function() {
        let driver = await new Builder().forBrowser('chrome').build();
        try {
            await driver.get('http://www.facebook.com');
        
            // Assertion for the URL
            const currentUrl = await driver.getCurrentUrl();
            assert.strictEqual(currentUrl, 'https://www.facebook.com/', "URL after navigation must be 'https://www.facebook.com/'.");

            // cookie element
            const cookieElement = await driver.findElement(By.xpath("/html/body/div[3]/div[2]/div/div/div/div/div[4]/button[2]"));
            await cookieElement.click();
           

            // Wait for the registration form button to be clickable
            let registrationFormButton = await driver.wait(until.elementLocated(By.css("a[data-testid='open-registration-form-button']")), 10000);
            await driver.executeScript("arguments[0].click();", registrationFormButton);
            await driver.sleep(1000);

            let day = await driver.wait(until.elementIsVisible(driver.findElement(By.id("day"))));
            await driver.findElement(By.css("option:nth-child(7)")).click(); // Clicking the 7th option
            let day_value = await day.getAttribute("value")
            assert.strictEqual(day_value, "7", "Selected day must be 7." )
            
            let month = await driver.findElement(By.id("month"));
            await driver.findElement(By.xpath("//option[text()='Set']")).click(); // Clicking the option with text "Sept"
            let month_value = await month.getAttribute("value")
            assert.strictEqual(month_value, "9", "Selected month must be '9'.");

            let year = await driver.findElement(By.id("year"));
            await driver.findElement(By.css("option[value='1990']")).click(); // Clicking the option with value "1990"
            let year_value = await year.getAttribute("value")
            assert.strictEqual(year_value, "1990", "The selected year must be 1990")

        } finally {
            await driver.quit();
        }
    }).timeout(50000); // Increase timeout to 50 seconds
});
