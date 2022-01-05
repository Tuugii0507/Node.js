let args = process.argv.slice(2);
// let args = process.argv.slice(2, 3);
// [1 2 4 5 63 3 ]


// if(args[0] == "-t"){
//     console.log(args[1])
// }

if(args[0] == "-e"){
    console.log("email: " + args[1])
}else if(args[0] == "-n"){
    console.log("name: " + args[1])
}
console.log(args);