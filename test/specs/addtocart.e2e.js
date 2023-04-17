const LoginPage = require('../pageobjects/Authentication/login.page');
const cartpage = require('../pageobjects/addtocart.page');

//import { browser, $, $$, expect } from '@wdio/globals'
//const SecurePage = require('../pageobjects/secure.page')
/*
users
1: test@mailinator.com , Stephanie1!
*/


describe('My add to cart test ', () => {

    it('should login to the application and add the first item on the page to the users cart', async () => {
        await LoginPage.open();
        await LoginPage.login("test@mailinator.com", "Stephanie1!");
        await browser.pause(2000);
        await browser.url('https://ui-automation-camp.vercel.app/products');
        await cartpage.addsingleitem();
        //await browser.pause(2000);
        await browser.url('https://ui-automation-camp.vercel.app/products');
        
    });
    it('should login to the application and add the second and third items on the page to the users cart', async () => {
        //await cartpage.signout();
        //await LoginPage.open();
        //await LoginPage.login("test@mailinator.com", "Stephanie1!");
        //await browser.pause(2000);
        
        //go to cart
        //view detailed cart
        //remove items
        //go back to product gallery page

        await browser.url('https://ui-automation-camp.vercel.app/products');
        await cartpage.addmultiplteitems();
        await browser.pause(1500);
        await browser.url('https://ui-automation-camp.vercel.app/products');
        
    });
    it('should login to the application, navigate to the product detail pages of the first item in the gallery and add it to the cart', async () => {
        //await cartpage.signout();
        
        //go to cart
        //view detailed cart
        //remove items
        //go back to product gallery page

        //await browser.url('https://ui-automation-camp.vercel.app/products');
        await cartpage.addsingleprdctpage();
        await browser.pause(1500);
        await browser.url('https://ui-automation-camp.vercel.app/products');
        
    });
    // it('should login to the application, navigate to the product detail pages of the first two items and add them to the users cart', async () => {
    //     //await cartpage.signout();
        
    //     //go to cart
    //     //view detailed cart
    //     //remove items
    //     //go back to product gallery page

    //     //await browser.url('https://ui-automation-camp.vercel.app/products');
    //     await cartpage.addmultiplteprdctpage();
    //     await browser.pause(1500);
    //     await browser.url('https://ui-automation-camp.vercel.app/products');
        
    // });


    
});
