const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Given array? :', (banana) => {
    let a = ''
    for (var i = banana.length - 1; i >= 0; i--) {
        a = a + banana[i];
    }
    console.log(a)
    rl.close()
});
