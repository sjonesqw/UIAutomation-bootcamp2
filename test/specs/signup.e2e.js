
const signupdata = require('../data/signupdata');
const signupPage = require('../pageobjects/Authentication/signup.page');
const signup = require('../pageobjects/Authentication/signup.page')
//import { browser, $, $$, expect } from '@wdio/globals'
//const SecurePage = require('../pageobjects/secure.page')
/*
users
1: test@mailinator.com , Stephanie1!
2: test2@mailinator.com , ^^
*/


describe('My Login application', () => {
    it('should sign up a user for the application with valid credentials', async () => {
        await signup.open();
        for (const user of signupdata){
            await signup.signup(user.email,user.password);
            if (user.username=="exisitng user"){
                expect (signup.errormsg.toHaveText("We're sorry, something went wrong when attempting to sign up."));
                await  browser.url('https://ui-automation-camp.vercel.app/');
            }else{
                expect( browser.url('https://ui-automation-camp.vercel.app/products'));
                await signupPage.signoutbtn.waitForDisplayed(2000);
                await signupPage.signoutbtn.click();
                await browser.url('https://ui-automation-camp.vercel.app/');
            }
        }
        
    });
    
});