
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
        //return $('input[name="firstName"]');
        return $('#firstName');
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
        
        return $('//a[@href="https://www.linkedin.com/company/qualityworks-consulting-group-llc"]');

    }
    get twitter (){
        return $('//a[@href="https://twitter.com/qualityworkscg"]');
    }

    get email (){
        return $('//p[normalize-space()="info@qualityworkscg.com"]');
    }
    get toast(){
        return $('#toast-1 > div');
    }


    


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async linkedincheck () {
        //var linkedurl = "https://www.linkedin.com/company/qualityworks-consulting-group-llc";
        await this.linkedin.waitForDisplayed(1500);
        await this.linkedin.click();
        await browser.pause(2000);
        await browser.switchWindow("https://www.linkedin.com/company/qualityworks-consulting-group-llc");
        
    }

    async twittercheck (){
        
        await this.twitter.waitForDisplayed(1500);
        await this.twitter.click();
        await browser.pause(2000);
        await browser.switchWindow("https://twitter.com/qualityworkscg");
         
    }

    async contactform (name1, name2, email, subject, message) {
        
        await this.fname.waitForDisplayed(1500);
        await this.fname.click();
        await this.fname.setValue(name1);
        await this.lname.click();
        await this.lname.setValue(name2);
        await this.emailfield.waitForDisplayed(500);
        await this.emailfield.setValue(email);
        await this.subject.waitForDisplayed(500);
        await this.subject.setValue(subject);
        await this.message.waitForDisplayed(500);
        await this.message.setValue(message);
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