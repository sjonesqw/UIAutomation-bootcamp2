const LoginPage = require('../pageobjects/Authentication/login.page');
const contact = require('../pageobjects/contact.page');


describe('My contact page test ', () => {

    

    it(' should naviagate to the contact page and verify that links work and the contact form is submittable ', async () => {
        

        await LoginPage.open();
        await LoginPage.login("test@mailinator.com", "Stephanie1!");
        await browser.url('https://ui-automation-camp.vercel.app/products');
        await contact.contactbtn.click();
        await contact.linkedincheck();
        await browser.pause(5000);
        await browser.switchWindow("https://ui-automation-camp.vercel.app/contact");
        //await contact.twittercheck();
        await browser.pause(2000);
        await contact.contactform ("Steph","jo","test@mailinator.com","Testing 123","I hope this tests works");
        
        
    });

    
});