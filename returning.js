const add = (x) => (y) => x+y;

let result1 = add(10)(20);
console.log(result1);


const add10 = add(10);
let result = add10(20);

console.log(result);