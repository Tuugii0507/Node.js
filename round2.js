const math = require("./round1");


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('ooy toogoo ug :', (banana) => {

    let haha = math.round((banana))

    console.log(haha)
  rl.close();
});