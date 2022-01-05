const chalk = require("chalk");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(chalk.yellow("Name : "), (name) => {
  let zai = name.split(" ");
  // let tseg = name.split(".")

  if(zai[0].slice(-1) == "."){
    if (zai[0].slice(-1) == ".") {
        if (name[0] == name[0].toUpperCase() && name.length >= 1) {
          rl.close();
        }
        if (
          zai[1].slice(0, 1) == zai[1].slice(0, 1).toUpperCase() &&
          zai[1].length >= 1
        ) {
          console.log(chalk.green("Your_Name: "), chalk.blue(name));
          rl.close();
        } else {
          console.log(
            chalk.red(
              "your name is wrong , Өдий том болчоод нэр мэрээ зөв бичээч!!!"
            )
          );
          rl.close();
        }
      } else {
        console.log(
          chalk.red("your name is wrong , Өдий том болчоод нэр мэрээ зөв бичээч!!!")
        );
        rl.close();
      }
  }else{
    if (zai[0].slice(-1) != ".") {
        if (name[0] == name[0].toUpperCase() && name.length >= 1) {
          rl.close();
        }
        if (
          zai[1].slice(0, 1) == zai[1].slice(0, 1).toUpperCase() &&
          zai[1].length >= 1 &&
          zai[1].slice(-1) == "."
        ) {
          // console.log(chalk.green("Your_Name: "), chalk.blue(name));
          rl.close();
        }
        if (
          zai[2].slice(0, 1) == zai[2].slice(0, 1).toUpperCase() &&
          zai[2].length >= 3
        ) {
          console.log(chalk.green("Your_Name: "), chalk.blue(name));
          rl.close();
        } else {
          console.log(
            chalk.red(
              "your name is wrong , Өдий том болчоод нэр мэрээ зөв бичээч!!!"
            )
          );
          rl.close();
        }
      }else{
        console.log(
            chalk.red(
              "your name is wrong , Өдий том болчоод нэр мэрээ зөв бичээч!!!"
            )
          );
          rl.close();
      }
  }  
});
// charAt(str.length-1)
