//const { $ } = require('webdriverio/build/commands/element');
//const { $ } = require('webdriverio/build/commands/element');
const items = ["Dell Laptop", "Gray Couch", "HP Laptop", "Macbook Pro", "Quality Blue Shoes", "Quality Cargo Pants", 
"Quality Fitted Hat", "Quality Heal Shoes", "Quality Hooded Sweatshirt", "Quality Jeans Pants", "Quality Kids Tshirt", "Quality Mousepad", "Quality Mug",
 "Quality Pillow","Quality Pink Pants", "Quality Stylish Shoes", "Quality Sweatshirt", "Quality Trucker Hat", "Quality Tshirt", "Quality Vneck", "Red Couch", "White Couch" ];
const Page = require('./page');
//var eltext = "//p[normalize-space()=' " +items[0]+"']'"



class filtersort extends Page {

    get sortoptionsbtn (){
        return $('#sort');
    }

    get itemname (){
        //return $('#product-0 > div.chakra-stack.css-n21gh5 > div > div.chakra-stack.css-1oeb4ru > p');
        return $(eltext).getText();

    }
    
    get resetbtn (){
        return ('#reset');
    }
    get itemnames (){
        var prodnum = "#product-";
        var namearray =[];
        for (let i=0;i<22;i++){
            prodnum = prodnum +i.toString();
            var slctor = prodnum+"> div.chakra-stack.css-n21gh5 > div > div.chakra-stack.css-1oeb4ru > p"

            namearray.push($(slctor).getText());
        }
        return namearray;
        //var slctor = prodnum+"> div.chakra-stack.css-n21gh5 > div > div.chakra-stack.css-1oeb4ru > p"
    }

    // async filterAZ () {
    //     await browser.url ('https://ui-automation-camp.vercel.app/products');
    //     await this.sortoptionsbtn.scrollIntoView(); 
    //     await this.sortoptionsbtn.selectByAttribute("value","aToZ");
    //     // var pageray =  this.itemnames;
    //     // //pageray.equals(items);
    //     return JSON.stringify(pageray) === JSON.stringify(items);

    //    // await this.itemname.

    //     // #product-0 > div.chakra-stack.css-n21gh5 > div > div.chakra-stack.css-1oeb4ru > p - first item
    //     // #product-1 > div.chakra-stack.css-n21gh5 > div > div.chakra-stack.css-1oeb4ru > p  - second item

    
    // }

    async filterZA () {
        //await expect(browser).toHaveUrl ('https://ui-automation-camp.vercel.app/products');
        await this.sortoptionsbtn.scrollIntoView(); 
        await this.sortoptionsbtn.selectByAttribute("value","zToA");
        var pageray =  this.itemnames;
        //pageray.equals(items);
        //console.log(JSON.stringify(pageray));
        return JSON.stringify(pageray) === JSON.stringify(items);
        //this.itemname.isEqual("Gray Couch");
        //console.log(this.itemname.getText());
        //await browser.pause(4000);
        //await this.name.isEqual(items[0]);
        
    
    }

    async filterlowhigh () {
        await browser.url ('https://ui-automation-camp.vercel.app/products');
        await this.sortoptionsbtn.selectByAttribute("value","lowToHigh");
    
    }
    async filterhighlow () {
        await browser.url ('https://ui-automation-camp.vercel.app/products');
        await this.sortoptionsbtn.selectByAttribute("value","highToLow");

    }
    async filtercategories () {

    }




}

module.exports = new filtersort ();