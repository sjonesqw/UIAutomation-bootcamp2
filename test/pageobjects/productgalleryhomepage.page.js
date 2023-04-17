//const { $ } = require('webdriverio/build/commands/element');
//const { $ } = require('webdriverio/build/commands/element');
//const { $ } = require('webdriverio/build/commands/element');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class productgallery extends Page {
    /**
     * define selectors using getter methods
     *  
     */
    get searchfield (){
        return $('#search');
        
    }
    get category(){
        return $('#category');
    }
    get quantitybox (){
        //return $('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)');
       // return $('#product-0 > div.chakra-stack.css-n21gh5 > div > div.chakra-numberinput.css-9renge > input');
       return $('#product-0-increase');
    }
    get firstprod (){
        return $('#product-0');
    }
    get resultgrid  (){
        return $('#__next > div.css-co4zd9 > div > div:nth-child(2) > div.css-12qzrsi');
    }
    get favoritefirst(){
        return $('div[id="product-0"] div[class="css-1m8iww1"]');
    }
    get toast(){
        return $('#chakra-toast-manager-top-right > li > div');
    }
    get pagetext (){
        return $('#__next > div.css-co4zd9 > div > div:nth-child(1) > div > div.chakra-stack.css-p4fh8y > p');
    }

    get resetbtn () {
       
        return $('#reset');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async selectcategory (){
        await this.category.scrollIntoView();
        await this.category.waitForClickable(2000);
        await this.category.selectByAttribute("value","pant");
        //await this.category.click();

    }
    async setquantity (){
        await this.quantitybox.click();
        await this.quantitybox.click();
    
    }
    async favorite () {
        await  this.resetbtn.click();
        await  this.favoritefirst.waitForExist(3000);
        await  this.favoritefirst.click();
        
        
        
        
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/products');
        //return super.open('customer/account/create/');
    }
}

module.exports = new productgallery();