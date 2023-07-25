const productgallery = require('../pageobjects/productgallerypage.page');
const LoginPage = require('../pageobjects/Authentication/login.page');

describe(' Verifies that all header links on the product gallery homepage work ', () => {

    it('Should navigate to the favourites page from the product gallery homepage', async () =>{
        await LoginPage.open();
        await LoginPage.login("test@mailinator.com", "Stephanie1!");
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products');
        await productgallery.favouriteHat.click();
        await productgallery.navigateToFavourites();
        await expect(productgallery.hatTitle).toHaveText("Quality Fitted Hat");
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/favorites');
        await productgallery.navigateToHome();
    }); 

    it('Should navigate to the about page from the product gallery homepage', async () =>{
        await productgallery.navigateToAbout();
        await browser.switchWindow('https://qualityworkscg.com/automation-bootcamp/');
        await expect(browser).toHaveUrl('https://qualityworkscg.com/automation-bootcamp/');
        await browser.switchWindow('https://ui-automation-camp.vercel.app/products');
    }); 
    it('Should navigate to the contact page from the product gallery homepage', async () =>{
        await productgallery.navigateToContact();
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/contact');
    }); 
    it('Should signout of the website ', async () =>{
        await productgallery.signOut();
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/');
    });

    

});