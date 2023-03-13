const puppeteer=require("puppeteer");



const amazonPrices=async ()=>{
      const browser=await puppeteer.launch();
      const page=await browser.newPage();
      await page.goto("https://desolate-badlands-28322.herokuapp.com")
      const Price=await page.evaluate(()=>document.querySelector("div").innerHTML
      );

      await page.screenshot({ path: 'example1.png' });

      console.log(Price);


} ;


amazonPrices();