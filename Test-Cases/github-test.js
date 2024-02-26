const { Builder, By } = require('selenium-webdriver');

describe('GitHub user profile Search', function() {
    it('Should search for the user Profile Ricardo-Cerqueira and enter the same profile', async function() {
        // Import Chai inside an async function (e.g., inside it block)
        const { expect } = await import('chai');

        let driver = await new Builder().forBrowser('chrome').build();
        try {
            await driver.manage().window().maximize();
            await driver.get('http://www.github.com');
            await driver.sleep(1000);

            //assert that is the github page
            var newPage = await driver.getCurrentUrl();
            expect(newPage).to.equal("https://github.com/")

            // Finding and clicking the search ID 
            await driver.findElement(By.className("search-input")).click();

            await driver.sleep(1000);
            await driver.findElement(By.id('query-builder-test')).sendKeys('Ricardo-Cerqueira');
            
            //assert input
            let searchInput = await driver.findElement(By.id('query-builder-test')).getAttribute("value")
            expect(searchInput).to.equal('Ricardo-Cerqueira');

            await driver.sleep(1000);
            await driver.findElement(By.xpath("/html/body/div[1]/div[1]/header/div/div[2]/div/div/qbsearch-input/div[1]/div/modal-dialog/div/div/div/form/query-builder/div[1]/div[2]/ul")).click();
            await driver.sleep(3000);
            
            // assert that new page is correct
            var pageTitleRepos = await driver.getTitle();
            expect(pageTitleRepos).to.include('Repository search results')  // using include because in the inspect of the element this is the title, however when using equal it adds 'º Github'
            // assert the URL is correct
            var reposUrl = await driver.getCurrentUrl();
            expect(reposUrl).to.equal("https://github.com/search?q=Ricardo-Cerqueira&type=repositories")

            // Select the Users option
            await driver.findElement(By.xpath('/html/body/div[1]/div[4]/main/react-app/div/div/div[1]/div/div/div[1]/div[2]/div/div/div/div/ul/li[1]/ul/li[6]/a/div/div/span[1]')).click();
            await driver.sleep(2000);

            // assert that new page is correct
            var pageTitleUsers = await driver.getTitle();
            expect(pageTitleUsers).to.include('User search results')  // same reason as before
            // assert the URL is correct
            var usersUrl = await driver.getCurrentUrl();
            expect(usersUrl).to.equal("https://github.com/search?q=Ricardo-Cerqueira&type=users")
            await driver.sleep(2000);

            // get Ricardo Cerqueira profile element
            const hyperLink = await driver.findElement(By.xpath('/html/body/div[1]/div[4]/main/react-app/div/div/div[1]/div/div/div[2]/div[2]/div/div[1]/div[4]/div/div/div/div/div[1]/div[2]/h3/div/a[1]/span'));
            // assert that the hyperlink refers to Ricardo Cerqueira
            const hyperlinkText = await hyperLink.getText();
            expect(hyperlinkText).to.equal('Ricardo Cerqueira');

            // click on the profile element
            await hyperLink.click();
            await driver.sleep(2000);

            // assert that the profile belongs to Ricardo Cerqueira
            var userProfile = await driver.getTitle();
            expect(userProfile).to.include("Ricardo-Cerqueira (Ricardo Cerqueira)")
            var userUrl = await driver.getCurrentUrl();
            expect(userUrl).to.equal("https://github.com/Ricardo-Cerqueira")

        } finally {
            await driver.quit();
        }
    }).timeout(50000); // Increase timeout to 50 seconds
});
