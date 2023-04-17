const LoginPage = require('../pageobjects/Authentication/login.page');
const search = require('../pageobjects/search.page');
const productgallery = require('../pageobjects/productgalleryhomepage.page');

describe('filter products and favorite filter results ', () => {

    

    it(' should naviagate to the product gallery page, filter by the pants category, increase the quantity of the first item in the pants category,reset the filter and add favorite the first item post reset', async () => {
        

        await LoginPage.open();
        await LoginPage.login("test@mailinator.com", "Stephanie1!");
        expect (browser.url('https://ui-automation-camp.vercel.app/products'));
        expect(productgallery.pagetext).toHaveTextContaining("Shop for wide range of womens and mens clothing");
        await productgallery.selectcategory();
        expect (productgallery.resultgrid).toHaveText("Pants");
        await productgallery.setquantity();
        expect(productgallery.firstprod).toHaveText("3");
        await productgallery.favorite();
        expect (productgallery.toast).toHaveText("Quality Fitted Hat added to favorites");
        await browser.pause(3000);

        
        
    });

    
});