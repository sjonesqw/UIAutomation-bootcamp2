
//const { $ } = require('webdriverio/build/commands/element');
const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class signupnew extends Page {
    /**
     * define selectors using getter methods
     *  
     */
    get entersite (){
        return $('//*[@id="signInOrRegister"]');
        //return $('#signInOrRegister');
        
    }

    get signuptab (){
        return $('//a[normalize-space()="Sign Up"]');
    }

    get enteremail () {
        
        return $('//input[@id="1-email"]');
        
    }
    
    get enterpassword () {
       
        return $('//input[@id="1-password"]');
        
    }

    get btnSubmit () {
        return $('//button[@id="1-submit"]');
        
    }
    get errormsg (){
        return $('.auth0-global-message.auth0-global-message-error');
    }
    get signoutbtn(){
        return $('#top-sign-out');
        
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async signup (username, password) {
        await  this.entersite.click();
        await  this.signuptab.waitForDisplayed(3000);
        await  this.signuptab.click();
        await this.enteremail.waitForDisplayed(3000);
        await this.enteremail.setValue(username);
        await this.enterpassword.click();
        await browser.pause(1000);
        await this.enterpassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
        
    }
}

module.exports = new signupnew();