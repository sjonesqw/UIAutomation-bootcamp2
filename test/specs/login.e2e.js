const logindata = require('../data/logindata');
const LoginPage = require('../pageobjects/Authentication/login.page');

/*
Deafult user details
1: test@mailinator.com , Stephanie1!
*/


describe('My Login application', () => {
    for( const user of logindata){

        it('should login with 2 invalid credentials first, then finally the default user', async () => {
                await LoginPage.open();
                await LoginPage.login(user.email,user.password);
    
                if(user.username == "invalid user email"){
                     expect (LoginPage.errorMsgEmail.toHaveText(user.errormsg));
                     await browser.url('https://ui-automation-camp.vercel.app/');
                }

                else if(user.username == "invalid password"){
                    expect (LoginPage.errorMsgGen.toHaveText("Wrong email or password."));
                    await browser.url('https://ui-automation-camp.vercel.app/');
               }

                else{
                    expect( browser.url('https://ui-automation-camp.vercel.app/products'));
                    await LoginPage.signoutBtn.waitForDisplayed(2000);
                    await LoginPage.signoutBtn.click();
                    await browser.url('https://ui-automation-camp.vercel.app/');
                }
                
                
            
            
        });

    }
    
           
    
    
});
