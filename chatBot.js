const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('HEy! What is your name? :', (banana) => {

    rl.question(`Hello ${banana}, My NAme Is NEstBot \n ChOice date or time?:`, (banana2) => {
        if(banana2=="date") {
            const d = new Date();
            let year = d.getFullYear();
            const x = new Date();
            let month = x.getMonth() + 1;
            const a = new Date();
            let day = d.getDate();
            console.log("Year:",year,"Month:",month,"Day:",day ,",bye bro :)");
            rl.close();
        } else {
            const d = new Date();
            let hours = d.getHours();
            const k = new Date();
            let minute = k.getMinutes();
            const l = new Date();
            let second = l.getSeconds();     
            console.log("Hours:",hours, "Minute",minute, "Second",second, ",bye bro :)" )
            rl.close();
        }
    });

});
