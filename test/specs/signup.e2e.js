
const signupdata = require('../data/signupdata');
//const signupPage = require('../pageobjects/Authentication/signup.page');
const signup = require('../pageobjects/Authentication/signup.page')

/*
users
1: test@mailinator.com , Stephanie1!
2: test2@mailinator.com , ^^
*/


describe('My Login application', () => {

    for (const user of signupdata){
        it('should sign up a user for the application with valid credentials', async () => {
        
            await signup.open();
        
            await signup.signup(user.email,user.password);
            await browser.pause(2000);
            if (user.username=="existing user"){
                await expect (signup.errorMsg.toHaveText("We're sorry, something went wrong when attempting to sign up."));
                await expect(browser.url('https://ui-automation-camp.vercel.app/'));
            }else{
                await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products');

                //expect(browser.url('https://ui-automation-camp.vercel.app/products'));
                await signup.signoutBtn.waitForDisplayed(2000);
                await signup.signoutBtn.click();
                await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/');
            }
        
        
    });
}
    
});