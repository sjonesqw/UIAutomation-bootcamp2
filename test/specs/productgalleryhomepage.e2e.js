const LoginPage = require('../pageobjects/Authentication/login.page');
const search = require('../pageobjects/search.page');
const productgallery = require('../pageobjects/productgalleryhomepage.page');

describe('filter products and favorite filter results ', () => {

    

    it(' should naviagate to the product gallery page and search for items from the search ddata file', async () => {
        

        await LoginPage.open();
        await LoginPage.login("test@mailinator.com", "Stephanie1!");
        await browser.url('https://ui-automation-camp.vercel.app/products');
        await search.search("hat");
        
        
    });

    
});