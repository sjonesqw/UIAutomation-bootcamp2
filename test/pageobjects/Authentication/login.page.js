


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
        
        return $('#signInOrRegister');
        
    }

    get enteremail () {
        
        return $('//*[@id="1-email"]');
        
        
    }
    

    get enterpassword () {
       
        return $('//input[@id="1-password"]'); 
        
    }

    get btnSubmit () {
        
        
        return $('body > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2)');
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
    async login (username, password) {
        await this.entersite.waitForDisplayed(2000);
        await  this.entersite.click();
        await this.enteremail.waitForDisplayed(2000);
        await this.enteremail.click();
        await this.enteremail.setValue(username);
        await this.enterpassword.waitForDisplayed(1500);
        await this.enterpassword.click();
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