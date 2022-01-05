// Өөрийн map function-ийг өөрөө хэрэгжүүлэх. Доорх жишээгээр шалгаарай.

// myMap(['5', '7', '22'], parseInt)
// myMap(['5', '7', '22'], Number)
// myMap(['5', '7', '22'], x => Number(x) * 2)
const arr= [1,3,6,2,46,3,32,2,8,70,79,8,86,75,64,5,34,2,3,46,346,34,5,34,5,34,62,4,57,56,8,467,56,7,65,76,7,6,76,7,6,7,5645784]

const parseint = el => Number(el);
const number = (x) => {
    return Number(x);
}

const myMap = (arr, func) => {
    let newArr = [];
    arr.forEach(el => {
        newArr.push(func(el));
    });
    return newArr;
}
console.log(myMap(arr, x => Number(x) * 2)) 