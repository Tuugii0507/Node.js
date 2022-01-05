const chalk = require('chalk');
const { parse } = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question(" bid uldegdel mungu garval tanii monpay dansru hiih bolno!? \n herev monpay dans bhku b ol munguu taaruulj uguhiig anhaarna uu!!!\n  ta monpay dansaa hiine uu! " , (monpay) => {
  monpay = parseInt(monpay);

      // console.log(products.name, products.number)
      const products = [
        { number: 1, name: 'Orange juice' },
        { number: 2, name: 'Soda' },
        { number: 3, name: 'Chocolate snack' },
        { number: 4, name: 'Cookies' },
        { number: 5, name: 'Gummy bears' },
        { number: 6, name: 'Chocolates' },
        { number: 7, name: 'Crackers' },
        { number: 8, name: 'Potato chips' },
        { number: 9, name: 'Small snack' },
        ]
      console.log(products , )
      rl.question("herev baraa bhku bol hudaldan avalt shuud zogsohiig anhaarna u! \nAvah ymniha codiig bich : " , (banana) =>{
        const products = [
            { number: 1, price: 1000, name: 'Orange juice' },
            { number: 2, price: 2000, name: 'Soda' },
            { number: 3, price: 1500, name: 'Chocolate snack' },
            { number: 4, price: 2500, name: 'Cookies' },
            { number: 5, price: 1800, name: 'Gummy bears' },
            { number: 6, price: 5000, name: 'Chocolates' },
            { number: 7, price: 1200, name: 'Crackers' },
            { number: 8, price: 2200, name: 'Potato chips' },
            { number: 9, price: 800, name: 'Small snack' },
            ]
        let a = banana ;
        a = parseInt(a);
            const possiblyProduct = products.filter(product => product.number == a);
            console.log(possiblyProduct[0].name ,":", possiblyProduct[0].price , "<-- Tugrug bolj bna?!")

            rl.question("Ta mungun dungee hiine uu ? ", (mungu) => {
            mungu = parseInt(mungu)
            if(mungu > possiblyProduct[0].price){
                let hariult = mungu - possiblyProduct[0].price;
                console.log("monpay dans", monpay ,":","hariult : " ,hariult, "bid uldegdiig shiljuulsen", "Hudaldan avalt hiisend bayrlalaa!!!")
                rl.close()
            }else if(possiblyProduct[0].price == mungu){
              console.log("Hudaldan avalt hiisend bayrlalaa!!!")
              rl.close()
              
            }else{
              console.log('Mungu chin hurhgui baina!!!')
              rl.close()
            }
          })
      });
    })
        

