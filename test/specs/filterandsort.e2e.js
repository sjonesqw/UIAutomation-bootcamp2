const LoginPage = require('../pageobjects/Authentication/login.page');
const addtocart = require('../pageobjects/addtocart.page');
const filterandsort = require('../pageobjects/filterandsort.page');
const items = ["Dell Laptop", "Gray Couch", "HP Laptop", "Macbook Pro", "Quality Blue Shoes", "Quality Cargo Pants", 
"Quality Fitted Hat", "Quality Heal Shoes", "Quality Hooded Sweatshirt", "Quality Jeans Pants", "Quality Kids Tshirt", "Quality Mousepad", "Quality Mug",
 "Quality Pillow","Quality Pink Pants", "Quality Stylish Shoes", "Quality Sweatshirt", "Quality Trucker Hat", "Quality Tshirt", "Quality Vneck", "Red Couch", "White Couch" ];

describe('My filter & sort test ', () => {

    // it('should navigate to the product gallery page and sort items A - Z ', async () => {
        

    //     await LoginPage.open();
    //     await LoginPage.login("test@mailinator.com", "Stephanie1!");
    //     await browser.pause(2000);
    //     await browser.url('https://ui-automation-camp.vercel.app/products');
    
    //     await browser.pause(2000);
        
        
    // });

    it(' should naviagate to the product gallery page and sort items Z - A ', async () => {
        

        await LoginPage.open();
        await LoginPage.login("test@mailinator.com", "Stephanie1!");
        await browser.pause(2000);
        //await filterandsort.scrollIntoView();
        await filterandsort.filterZA();
        await browser.pause(1000);
        //expect (filterandsort.filterZA()).toEqual(false);
        await filterandsort.filterAZ();
        expect(JSON.stringify(pageray) === JSON.stringify(items));
        await browser.pause(1000);
        await filterandsort.filterhighlow();
        await browser.pause(1000);
        await filterandsort.filterlowhigh();
        await browser.url('https://ui-automation-camp.vercel.app/products');
        await addtocart.addsingleitem();
        await checkoutPage.checkout("Test Jay","test@mailinator.com","address_Full_match", "678","Chicago","New brunswick","10");
        await cartview.viewanddeletefromdetail();
        await browser.pause(2000);
        
        
    });

    
});