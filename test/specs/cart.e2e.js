const LoginPage = require('../pageobjects/Authentication/login.page');
const addtocart = require('../pageobjects/addtocart.page');
const cartview = require('../pageobjects/cart.page');




describe('My cart view test ', () => {

    it('should login to the application (if necessary) and go to the cart', async () => {
        await LoginPage.open();
        await LoginPage.login("test@mailinator.com", "Stephanie1!");
        await browser.pause(2000);
        await browser.url('https://ui-automation-camp.vercel.app/products');
        await addtocart.addsingleitem();
        await browser.pause(1500);
        await cartview.changequatity();
        expect(cartview.getquantity.toHaveText('1'));
        expect(browser.url('https://ui-automation-camp.vercel.app/products#/cart'));
        await cartview.viewanddeletefromdetail();
        await browser.pause(2000);
        expect(cartview.emptycart.toHaveText("Your cart is empty"));

        
        
    });

    


    
});
