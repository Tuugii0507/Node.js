const yargs = require("yargs").argv;
const fs = require("fs");
const chalk = require("chalk");
let path = yargs._[0];

console.log(yargs); //obje

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (yargs.l) {
  if (yargs.l == true) {
    fs.readdir("./", (err, files) => {
      if (err) {
        return console.log(err);
      }
      files.forEach((file) => {
        if (yargs.l) {
          let data = fs.statSync(`./${file}`);
          console.log(chalk['red'](`${data.size}`) + ' ' +  chalk['blue'](`${data.birthtime}`) + ' ' +  chalk['yellow'](`${file}`) + ' ' +  `\n`);
        } else {
          console.log(`${file}`);
        }
      });
    });
  } else {
    fs.readdir(yargs.l, (err, files) => {
      if (err) {
        return console.log(err);
      }
      files.forEach((file) => {
        let data = fs.statSync(yargs.l + "/" + file);
        console.log(chalk["yellow"](`${data.size}`) + ' ' +  chalk["green"](`${data.birthtime}`) + ' ' +  chalk["blue"](`${file}`) + ' ' +  `\n`);
        // console.log(data.ctime)
      });
    });
  }
} else {
    if (path != undefined) {
  fs.readdir(path, (err, files) => {
    if (err) {
      return console.log(err);
    }

    files.forEach((file) => {
      console.log(chalk["red"](file));
    });
  });
} else {
  fs.readdir("./", (err, files) => {
    if (err) {
      return console.log(err);
    }

    files.forEach((file) => {
      console.log( chalk["blue"](file));
    });
  });
}
}
