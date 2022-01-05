const chalk = require('chalk');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Given array? :', (Banana) => {
    let zai = Banana.split(" ")
    let sum =1;
    let nana = 0;
    zai.forEach(el => {
                
        if(el % 2 == 1){
            sum*=parseInt(el)
        }else{
            nana+=parseInt(el)
        };
    })
    
    
    // console.log(chalk.blue(sum)`\n`, "Niilber", nana);
    console.log(chalk.keyword('red')('tegsh toonii niilber:') + chalk.keyword('green')(nana + "\n") + chalk.keyword('blue')('sondgoi toonii urjver:' ) + chalk.keyword('green')(sum ));
  rl.close();
});


//map(Number) <<< arrayiig number bolgodog
//filter(num => num % 2 == 1)
