

//const { $ } = require('webdriverio/build/commands/browser');
//const login = require('../pageobjects/Authentication/login.page');
//const { $ } = require('webdriverio/build/commands/element');
const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class cart extends Page {
    /**
     * define selectors using getter methods
     *  
     */
    get viewcartsummary (){
        return $('//button[@id="top-cart"]');
        //return $('#signInOrRegister');
        
    }
    get viewdetailcart(){
        return $('//button[normalize-space()="View detailed cart"]');
    }

    get deleteitemcartsummary () {
        //return $('input[name="email"]');
        //return $('//body/div[@id='snipcart']/div[@class='snipcart-modal__container snipcart-cart-summary--edit snipcart-cart-summary-side']/div[@class='snipcart-layout snipcart-modal']/div[@class='snipcart-layout__content snipcart-layout__content--side snipcart-cart--edit']/section[@class='snipcart-cart__content']/ul[@class='snipcart-item-list snipcart-scrollbar snipcart-item-list--no-shadow']/li[1]/div[1]/div[1]/div[1]/button[1]//*[name()='svg']//*[name()='path' and contains(@fill-rule,'evenodd')]');
    }
    get deleteitemdetailview (){

        return $('//body/div[@id="snipcart"]/div[@class="snipcart-modal__container"]/div[@class="snipcart-layout snipcart-modal"]/div[@class="snipcart-layout__content"]/section[@class="snipcart-cart__content"]/ul[@class="snipcart-item-list snipcart-scrollbar snipcart-item-list--no-shadow"]/li[1]/div[1]/div[1]/div[1]/button[1]//*[name()="svg"]');
    }
    get increasequantity (){
        return $('button[title="Increment quantity"]');
    }
     get decreasequantity (){
         return $('button[title="Decrement quantity"]');
     }
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async viewanddeletefromsummary () {
        await  this.viewcartsummary.click();
        //await browser.pause(2000);
        await this.deleteitemcartsummary.click();
    
        //await this.enteremail.click();
        //await browser.pause(1000)
    }
    async viewanddeletefromdetail () {
        //await this.viewcartsummary.waitForDisplayed(2000);
        //await this.viewcartsummary.click();
        //await this.viewdetailcart.waitForDisplayed(2000);
        //await this.viewdetailcart.click();
        //await browser.pause(2000);
        await this.deleteitemdetailview.waitForDisplayed(2000);
        await this.deleteitemdetailview.click();
    
        //await this.enteremail.click();
        //await browser.pause(1000)
    }
    async changequatity (){
        await this.viewdetailcart.waitForDisplayed(2000);
        await this.viewdetailcart.click();
        await this.increasequantity.waitForDisplayed(1500);
        await this.increasequantity.click();
        await browser.pause(2000);
        await this.decreasequantity.waitForDisplayed(1500);
        await this.decreasequantity.click();


    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
        //return super.open('customer/account/create/');
    }
}

module.exports = new cart();