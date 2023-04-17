const LoginPage = require('../pageobjects/Authentication/login.page');
const addtocart = require('../pageobjects/addtocart.page');
const cartview = require('../pageobjects/cart.page');

//import { browser, $, $$, expect } from '@wdio/globals'
//const SecurePage = require('../pageobjects/secure.page')
/*
users
1: test@mailinator.com , Stephanie1!
*/


describe('My cart view test ', () => {

    it('should login to the application (if necessary) and go to the cart', async () => {
        await LoginPage.open();
        await LoginPage.login("test@mailinator.com", "Stephanie1!");
        await browser.pause(2000);
        await browser.url('https://ui-automation-camp.vercel.app/products');
        await addtocart.addsingleitem();
        await cartview.changequatity();
        await cartview.viewanddeletefromdetail();
        await browser.pause(2000);
        //await browser.url('https://ui-automation-camp.vercel.app/products');
        
    });
    // it('should login to the application and add the second and third items on the page to the users cart', async () => {
    //     //await cartpage.signout();
    //     //await LoginPage.open();
    //     //await LoginPage.login("test@mailinator.com", "Stephanie1!");
    //     //await browser.pause(2000);
        
    //     //go to cart
    //     //view detailed cart
    //     //remove items
    //     //go back to product gallery page

    //     await browser.url('https://ui-automation-camp.vercel.app/products');
    //     await cartpage.addmultiplteitems();
    //     await browser.pause(1500);
    //     await browser.url('https://ui-automation-camp.vercel.app/products');
        
    // });


    
});
