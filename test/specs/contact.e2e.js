const LoginPage = require('../pageobjects/Authentication/login.page');
const contact = require('../pageobjects/contact.page');


describe('My contact page test ', () => {

    

    it(' should naviagate to the contact page and verify that links work and the contact form is submittable ', async () => {
        

        await LoginPage.open();
        await LoginPage.login("test@mailinator.com", "Stephanie1!");
        expect( browser.url('https://ui-automation-camp.vercel.app/products'));
        await contact.contactbtn.click();
        await contact.contactform ("Steph","jo","test@mailinator.com","Testing 123","I hope this tests works");
        await browser.pause(3000);
        await contact.twittercheck();
        expect (browser.url('https://twitter.com/qualityworkscg'));
        await browser.switchWindow("https://ui-automation-camp.vercel.app/contact");
        await contact.linkedincheck();
        expect (browser.url('https://www.linkedin.com/company/qualityworks-consulting-group-llc'));

        
        
        
    });

    
});