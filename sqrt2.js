const math = require("./sqrt1.js");

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('ooy toogoo ug :', (banana) => {

    math.sqrt(parseInt(banana))

  rl.close();
});