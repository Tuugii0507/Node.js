// Хүмүүсийн төрсөн онууд өгөгдсөн бол насуудыг бодож гарган ages array-д хадгал
const birthYear = [1994, 1997, 2003, 1993, 2001];
let result = birthYear.map(x => 2021 - x);
console.log(result)