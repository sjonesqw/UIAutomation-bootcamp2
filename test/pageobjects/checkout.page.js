

//const { $ } = require('webdriverio/build/commands/browser');
//const login = require('../pageobjects/Authentication/login.page');
//const { $ } = require('webdriverio/build/commands/element');
//const { $ } = require('webdriverio/build/commands/element');
//const { $ } = require('webdriverio/build/commands/element');
//const { $ } = require('webdriverio/build/commands/element');
//const { $ } = require('webdriverio/build/commands/element');
//const { $ } = require('webdriverio/build/commands/element');
//import { browser, expect } from ('@wdio/globals');
//const { $ } = require('webdriverio/build/commands/element');
//const { $ } = require('webdriverio/build/commands/element');
//const key = require ('webdriverio/' ) ;
const { Key } =  require("webdriverio");
//const { $ } = require("webdriverio/build/commands/element");
//const { $ } = require("webdriverio/build/commands/element");
//onst { $ } = require("webdriverio/build/commands/element");
//const { $ } = require("webdriverio/build/commands/element");
const Page = require('./page');
const testcard = "4242424242424242";
const expdate ="03/29";
const cvv = "908";



/**
 * sub page containing specific selectors and methods for a specific page
 */
class checkout extends Page {
    /**
     * define selectors using getter methods
     *  
     */
    get detailedcart(){
        return $('button[class="snipcart-button-link"]');
        //return $('//button[normalize-space()="View detailed cart"]');
        //return $('#snipcart > div > div > div.snipcart-layout__content.snipcart-layout__content--side.snipcart-cart--edit > section > div > div:nth-child(2) > footer > button.snipcart-button-link');
    }

    get checkoutbtn (){
        //return $('.snipcart-button-primary.snipcart-base-button.is-icon-right');
        //return $('button[class="snipcart-button-primary snipcart-base-button is-icon-right"]');
        return $('.snipcart-button-primary.snipcart-base-button.is-icon-right');
        
    }

    get billingname (){
        //return $('//input[@id="name_43f0068f-3158-4e9e-a830-94fafd7fa9dc"]');
        //return $ ('#name_eeafb758-875b-4661-a660-997fa8835c2d');
        return $('input[name="name"]');
        
    }
    get billingemail (){
        //return $('//input[@id="email_43f0068f-3158-4e9e-a830-94fafd7fa9dc"]');
        return $('input[name="email"]');
        //return $('/html/body/div[2]/div/div/div[2]/div/div/div/div[1]/form/div/fieldset/div[2]/div/input');
    
    }

    get billingaddress () {
        //return $('//input[@id="name_43f0068f-3158-4e9e-a830-94fafd7fa9dc"]');
        //body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > fieldset:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)
        //return $ ('body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > fieldset:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)');
        return $('#snipcart-billing-form > div > div:nth-child(3) > fieldset > div:nth-child(1) > div.snipcart-form__field.snipcart-form__cell--large > div > div.snipcart-textbox.snipcart__font--bold.snipcart__font--secondary.snipcart-form__select');
        //return $('input[name="address1"]');
    }
    get billingaddresssuggestion(){
        return $('(//li[@class="snipcart-typeahead__suggestion snipcart-typeahead__suggestion--option snipcart__font--bold"])[3]');
    }
    get aptsuite (){
        //return $('#address2_43f0068f-3158-4e9e-a830-94fafd7fa9dc');
        //return $('/html/body/div[2]/div/div/div[2]/div/div/div/div[1]/form/div/div[2]/fieldset/div[1]/div[2]/div/input');
        return $('input[name="address2"]');
    }
    get billingcity (){

        //return $('//input[@id="city_43f0068f-3158-4e9e-a830-94fafd7fa9dc"]');
        //return $('#city_43f0068f-3158-4e9e-a830-94fafd7fa9dc');
        //return $('/html/body/div[2]/div/div/div[2]/div/div/div/div[1]/form/div/div[2]/fieldset/div[2]/div/input');
        return $('input[name="city"]');
    }
    get billingcountry (){
        //return $('#country_5506d35a-079a-47b3-82ff-6772c764c888');
        return $('#snipcart-billing-form > div > div:nth-child(3) > fieldset > div:nth-child(3) > div > div > div > div > div > div');
    }

    get billingprovince (){
        //return $('//input[@id="province_43f0068f-3158-4e9e-a830-94fafd7fa9dc"]');
        //return $('#province_43f0068f-3158-4e9e-a830-94fafd7fa9dc');
        return $('input[name="province"]');
    }
    get billingpcode () {
        //return $('//input[@id="postalCode_43f0068f-3158-4e9e-a830-94fafd7fa9dc"]');
        return $('#postalCode_43f0068f-3158-4e9e-a830-94fafd7fa9dc');
    }
    get billingsubmit (){
       // return $ ('//button[@type="submit"]');
        return $('button[type="submit"]'); 
    }
    get paymentiframe (){
        return $('//div[@class="snipcart-payment-card-form snipcart-payment-card-form--loaded"]/iframe');
        //div[@class='snipcart-payment-card-form snipcart-payment-card-form--loaded']
    }
    get billingcard (){
        return $('#card-number');
    }
    get billingexpiry(){
        return $('#expiry-date');
    }
    get billingcvv (){
        return $('//input[@id="cvv"]');
    
    }
    get paymentbtn (){
        return $ ('button[type="submit"]');
    }

    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async checkoutshipping (name, email, address,aptsuite, city,province, postalcode) {
        await this.detailedcart.waitForDisplayed(2000);
        //await this.checkoutbtn.waitForDisplayed(2000);
        await this.detailedcart.click();
        await this.checkoutbtn.click();
        //await browser.url('https://ui-automation-camp.vercel.app/products#/checkout');
        await this.billingname.waitForDisplayed(2000);
        //await this.billingname.click();
        await this.billingname.setValue(name);
        //await browser.pause(2000);
        await this.billingemail.waitForDisplayed(2000);
        //await this.billingemail.click();
        await this.billingemail.setValue(email);
        //await browser.pause(3000);
        await this.billingaddress.waitForDisplayed(2000);
        await this.billingaddress.click();
        //await this.billingaddress.setValue(address);
        await browser.keys('5');
        await browser.pause(2500);
        await this.billingaddresssuggestion.waitForExist();
        await await this.billingaddresssuggestion.click();
        //await browser.keys('5');
        await browser.pause(5000);
        
        // await this.aptsuite.waitForDisplayed(2000);
        // await this.aptsuite.click();
        // await this.aptsuite.setValue(aptsuite);
        // await this.billingcity.waitForDisplayed(2000);
        // await this.billingcity.click();
        // await this.billingcity.setValue(city);
        // await this.billingcountry.waitForDisplayed(2000);
        // await this.billingcountry.selectByIndex(2);
        // await this.billingprovince.waitForDisplayed(2000);
        // await this.billingprovince.click();
        // await this.billingprovince.setValue(province);
        // await this.billingpcode.waitForDisplayed(2000);
        // await this.billingpcode.click();
        // await this.billingpcode.setValue(postalcode);
        await this.billingsubmit.click();
        //await browser.pause(2000);
        
        


        //await browser.setValue('input', ['Tab']);
        
    }
    async checkoutpayment (){
        
            
        await this.billingcard.waitForDisplayed(1500);
        await this.billingcard.click();
        await this.billingcard.setValue(testcard);
        await this.billingexpiry.setValue(expdate);
        await this.billingcvv.setValue (cvv);
        await this.paymentbtn.click();
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
        //return super.open('customer/account/create/');
    }
}

module.exports = new checkout();