const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Given array? :', (banana) => {
    let a = banana.split("");
    let r = a.reverse();
    let final = r.join('')
    console.log(final)
    rl.close()
});
