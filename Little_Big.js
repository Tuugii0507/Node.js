const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Given array? :', (apple) => {
  let str = apple.toUpperCase();  
  console.log(str);
  rl.close();
});