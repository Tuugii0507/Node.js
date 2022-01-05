const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Given array? :', (Banana) => {
    let arr = Banana.split(" ")
    // arr.forEach(el => {
    //   let a = parseInt(el)
    //   console.log(typeof el)
    // })
    let sum =0;
    arr.forEach(el => {
      sum+=parseInt(el)
    })
   
  console.log(sum);
  rl.close();
});