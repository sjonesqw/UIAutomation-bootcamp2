//const { $ } = require('webdriverio/build/commands/element');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class contact extends Page {
    /**
     * define selectors using getter methods
     *  
     */
    get contactbtn (){
        return $('#top-contact');
        
    }
    get fname (){
        return $('input[name="firstName"]');
    }
    get lname (){
        return $('input[name="lastName"]');
    }
    get emailfield (){
        return $('input[name="email"]');
    }
    get subject (){
        return $('#subject');
    }
    get message (){
        return $('#message');
    }
    get sendmmssgbtn (){
        return $('button[class="chakra-button css-vs0e4t"]');
    }

    get linkedin(){
        //return $('a[target="_blank"][href="https://www.linkedin.com/company/qualityworks-consulting-group-llc"]');
        return $('//a[@href="https://www.linkedin.com/company/qualityworks-consulting-group-llc"]');

    }
    get twitter (){
        return $('//a[@href="https://www.linkedin.com/company/qualityworks-consulting-group-llc"]');
    }

    get email (){
        return $('//p[normalize-space()="info@qualityworkscg.com"]');
    }


    


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async linkedincheck () {
        var linkedurl = "https://www.linkedin.com/company/qualityworks-consulting-group-llc";
        await this.linkedin.waitForDisplayed(1500);
        await this.linkedin.click();
        await browser.pause(2000);
        await browser.switchWindow("https://www.linkedin.com/company/qualityworks-consulting-group-llc");
        await expect (browser.getUrl()===linkedurl);

        
        
        
    }

    async twittercheck (){
        var twitterurl = "https://twitter.com/qualityworkscg";
        await this.twitter.waitForDisplayed(1500);
        await this.twitter.click();
        await browser.pause(2000);
        await browser.switchWindow("https://twitter.com/qualityworkscg");
        await expect (browser.getUrl()===twitterurl);
    }

    async contactform (name1, name2, email, subject, message) {
        
        await this.fname.waitForDisplayed(1500);
        await browser.pause(2000);
        //await this.fname.click();
        await this.fname.setvalue(name1);
        await this.lname.waitForDisplayed(500);
        await this.lname.click();
        await this.lname.setvalue(name2);
        await this.emailfield.waitForDisplayed(500);
        await this.emailfield.setvalue(email);
        await this.subject.waitForDisplayed(500);
        await this.subject.setvalue(subject);
        await this.message.waitForDisplayed(500);
        await this.message.setvalue(message);
        await this.sendmmssgbtn.waitForDisplayed(500);
        await this.sendmmssgbtn.click();
        
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/products');
        //return super.open('customer/account/create/');
    }
}

module.exports = new contact();