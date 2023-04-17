
//const { $ } = require('webdriverio/build/commands/element');
//const { $ } = require('webdriverio/build/commands/element');
//const { $ } = require('webdriverio/build/commands/element');
const Page = require('./page');

class addtocart extends Page{

    get selectitem () {
        return $('//div[@id="product-0"]//button[@id="add-to-cart"]');
    }
    get mitem1 () {
        return $('//div[@id="product-1"]//button[@id="add-to-cart"]');
    }
    get mitem2 () {
        return $('//div[@id="product-2"]//button[@id="add-to-cart"]');
    }
    get singleitemprdctpage(){
        return $('//div[@id="product-0"]//img[@class="chakra-image css-2i84d9"]');
    }
    get mitem1prdctpage (){
        return $('//div[@id="product-1"]//img[@class="chakra-image css-2i84d9"]')
    }
    get mitem2prdctpage (){
        return $('//div[@id="product-2"]//img[@class="chakra-image css-2i84d9"]')
    }
    get addtocartprdctpage (){
        return $('//button[@id="add-to-cart"]')
    }

    get signoutbtn(){
        return $('//button[@id="top-sign-out"]');
    }
    get shoppingcart(){
        return $('//button[@id="top-cart"]');
    }

    get detailedcart (){
        return $('//button[normalize-space()="View detailed cart"]');
    }
    get cartsummary (){
        return $('//section[@class="snipcart-cart__content"]');
    }

    get rmvitem () {
        //return $('//li[1]//div[1]//div[1]//div[2]//div[1]//div[2]//div[2]//div[1]//div[1]//button[1]//*[name()="svg"]');
        return $('button[title="Remove item"]');
    }
    // get rmvitem2 () {
    //     return $('//li[1]//div[1]//div[1]//div[2]//div[1]//div[2]//div[2]//div[1]//div[1]//button[1]//*[name()='svg']')
    // }

    //add multiple of a single item to cart, from gallery page
    async addsingleitem () {
        await this.selectitem.waitForDisplayed(1500);
        await this.selectitem.click();
        await browser.pause(2000);
    }

    //add more than one types of items to the cart, from gallery page
    async addmultiplteitems () {
        await this.mitem1.waitForDisplayed(2000);
        await this.mitem1.click();
        await browser.pause(1500);
        await this.mitem2.click();
    }

    //add multiple of a single item to cart, from product detail page
    async addsingleprdctpage () {
        await this.singleitemprdctpage.click();
        await this.addtocartprdctpage.click();
    }

    //add more than one types of items to the cart, from produt detail pages
    // async addmultiplteprdctpage () {
    //     await this.mitem1prdctpage.click();
    //     await this.addtocartprdctpage.click();
    //     await browser.url('https://ui-automation-camp.vercel.app/products');
    //     await this.mitem2prdctpage.click();
    //     await this.addtocartprdctpage.click();

    // }

    //signout after each to get a fresh cart
    async signout(){
        await this.signoutbtn.click();
    }

    // called multiple times to remove items from cart
    async rmvitems(){
        await this.rmvitem.click();
    }

    open () {
        return super.open('');
        //return super.open('customer/account/create/');
    }
}

module.exports = new addtocart();