const PI = 3.14;
// console.log(PI);
// module.exports.PI = PI;

const max = (a, b) => {
    if(a>b){
        return a;
    }else{
        return b;
    }
}

// const mini = (a, b) => {
//     if(a<b){
//         return a;
//     }else{
//         return b;
//     }
// }

module.exports.max = max;