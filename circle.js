const fs = require('fs');
const pi = require('./math')
// pi = {PI : 3.14}
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('radius :', (Banana) => {
    let ans = Banana*pi.PI*2

  console.log(ans);
  rl.close();
});