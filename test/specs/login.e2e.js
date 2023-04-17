const logindata = require('../data/logindata');
const loginPage = require('../pageobjects/Authentication/login.page');
const LoginPage = require('../pageobjects/Authentication/login.page')

/*
users
1: test@mailinator.com , Stephanie1!
*/


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        for (const user of logindata){
            await LoginPage.login(user.email,user.password);

            if(user.username == "invalid user email"|| user.username == "invalid password"){
                 expect (LoginPage.errormsg.toHaveText("Wrong email or password."));
                 await browser.url('https://ui-automation-camp.vercel.app/');
            }else{
                await LoginPage.signoutbtn.click();
            }
            
            //await
        }
        await LoginPage.login("test@mailinator.com","Stephanie1!");
        await browser.pause(2000);
        await browser.url('https://ui-automation-camp.vercel.app/products');
        
    });
    
});
