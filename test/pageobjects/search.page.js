
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class search extends Page {
    /**
     * define selectors using getter methods
     *  
     */
    get searchfield (){
        return $('#search');
        
    }


    get resetbtn () {
       
        return $('#reset');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async search (term) {
        await this.searchfield.scrollIntoview();
        await  this.searchfield.click();
        await  this.searchfield.setValue(term);
        //verify that search results match term
        await this.resetbtn.click();
        
        
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/products');
        //return super.open('customer/account/create/');
    }
}

module.exports = new search();