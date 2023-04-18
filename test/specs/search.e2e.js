const LoginPage = require('../pageobjects/Authentication/login.page');
const search = require('../pageobjects/search.page');
const filterandsort = require('../pageobjects/filterandsort.page');

describe('My filter & sort test ', () => {

    

    it(' should naviagate to the product gallery page and search for items from the search data file', async () => {
        

        await LoginPage.open();
        await LoginPage.login("test@mailinator.com", "Stephanie1!");
        await browser.url('https://ui-automation-camp.vercel.app/products');
        await search.search("hat");
        
        
    });

    
});