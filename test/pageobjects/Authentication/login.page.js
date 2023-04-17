


//const { $ } = require('webdriverio/build/commands/element');
//const { $ } = require('webdriverio/build/commands/element');
//const { $ } = require('webdriverio/build/commands/element');
const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     *  
     */
    get entersite (){
        //return $('//*[@id="signInOrRegister"]');
        return $('#signInOrRegister');
        
    }

    get enteremail () {
        //return $('input[name="email"]');
        return $('//input[@id="1-email"]');
        
        //return $('body > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > span:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > input:nth-child(2)');
    }
    ////input[@id='1-email']
    // //*[@id="1-email"]

    get enterpassword () {
       // return $ ('input[name="password"]');
        return $('//input[@id="1-password"]'); 
        //return ('body > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > span:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > input:nth-child(2)');
    }

    get btnSubmit () {
        //return $('//*[@id="1-submit"]');
        // //*[@id="1-submit"]
        //return $('//button[@id="1-submit"]');
        return $('body > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2)');
    }
    get errormsg (){
        return $('.auth0-global-message.auth0-global-message-error');//
    }
    get signoutbtn(){
        return $('#top-sign-out');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await  this.entersite.click();
        //await browser.pause(2000);
        await this.enteremail.waitForDisplayed(3000);
        //await this.enteremail.click();
        //await browser.pause(1000);
        await this.enteremail.setValue(username);
        await this.enterpassword.waitForDisplayed(1500);
        //await this.enterpassword.click();
        await browser.pause(1000);
        await this.enterpassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
        //return super.open('customer/account/create/');
    }
}

module.exports = new LoginPage();