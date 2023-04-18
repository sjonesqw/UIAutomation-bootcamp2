//const { $ } = require('webdriverio/build/commands/element');
//const { $ } = require('webdriverio/build/commands/element');
const items = ["Dell Laptop", "Gray Couch", "HP Laptop", "Macbook Pro", "Quality Blue Shoes", "Quality Cargo Pants", 
"Quality Fitted Hat", "Quality Heal Shoes", "Quality Hooded Sweatshirt", "Quality Jeans Pants", "Quality Kids Tshirt", "Quality Mousepad", "Quality Mug",
 "Quality Pillow","Quality Pink Pants", "Quality Stylish Shoes", "Quality Sweatshirt", "Quality Trucker Hat", "Quality Tshirt", "Quality Vneck", "Red Couch", "White Couch" ];

 const prices =["15","15","17","20","20","20","20","20","20","20","24","28","30","40","44","50","234","320","550","680","1000","2000"];
//const { $ } = require('webdriverio/build/commands/element');
//const { $ } = require('webdriverio/build/commands/element');
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
    get itemsgrid (){
        return $('#__next > div.css-co4zd9 > div > div:nth-child(2) > div.css-12qzrsi');
    }
    
    get resetbtn (){
        return ('#reset');
    }
    get itemnames (){
        let prodnum = "#product-";
        let namearray =[];
        for (let i=0;i<22;i++){
            
            let slctor = `//*[@id="product-${i}"]/div[2]/div/div[1]/p`;
            namearray.push(String($(slctor).getText()));

            //prodnum = prodnum +i.toString();
            //var slctor = prodnum+"> div.chakra-stack.css-n21gh5 > div > div.chakra-stack.css-1oeb4ru > p"
                //*[@id="product-0"]/div[2]/div/div[1]/p
                
        }
        return namearray;
        //var slctor = prodnum+"> div.chakra-stack.css-n21gh5 > div > div.chakra-stack.css-1oeb4ru > p"
    }
    get itemcosts (){
        //let prodnum = "#product-";
        let costarray =[];
        for (let i=0;i<22;i++){
            
            let slctor = `//*[@id="product-${i}"]/div[2]/div/div[3]/p`;
            let fullprice = String($(slctor).getText());
            let num = fullprice.split("\n")
            costarray.push(num);
                //*[@id="product-0"]/div[2]/div/div[1]/p
                
        }
        return costarray;
        //var slctor = prodnum+"> div.chakra-stack.css-n21gh5 > div > div.chakra-stack.css-1oeb4ru > p"
    }


    async filterAZ () {
        
        await this.sortoptionsbtn.scrollIntoView(); 
        await this.sortoptionsbtn.selectByAttribute("value","aToZ");
        let pageray =  this.itemnames;
        // //pageray.equals(items);
        expect (JSON.stringify(pageray) == JSON.stringify(items));

       // await this.itemname.

        

    
    }

    async filterZA () {
        
        await this.sortoptionsbtn.scrollIntoView(); 
        await this.sortoptionsbtn.selectByAttribute("value","zToA");
        await browser.pause(2000);
        let names =  this.itemnames;
        //pageray.equals(items);
        //console.log(names);
        expect( JSON.stringify(names) == JSON.stringify(items.reverse()));
        
        
    
    }

    async filterlowhigh () {
        //await browser.url ('https://ui-automation-camp.vercel.app/products');
        await this.sortoptionsbtn.scrollIntoView();
        await this.sortoptionsbtn.selectByAttribute("value","lowToHigh");
        let costs = this.itemcosts;
        console.log(costs);
        expect( JSON.stringify(costs) == JSON.stringify(prices));

    
    }
    async filterhighlow () {
        //await browser.url ('https://ui-automation-camp.vercel.app/products');
        
        await this.sortoptionsbtn.scrollIntoView();
        await this.sortoptionsbtn.selectByAttribute("value","highToLow");
        let costs = this.itemcosts;
        expect( JSON.stringify(costs) == JSON.stringify(prices.reverse()));

    }
    async filtercategories () {

    }




}

module.exports = new filtersort ();