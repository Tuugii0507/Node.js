// WhereisWaldo([["a","a","a"],
//               ["a","a","a"],
//               ["a","b","a"]]) //>>> [3,2]

const chalk = require("chalk");

// WhereisWaldo([["O","O","O","O","O"],
//                ["O","O","O","O","O"],
//                ["O","O","O","O","P"],
//                ["O","O","O","O","O"],
//                ["O","b","O","O","O"],
//                ["O","O","O","O","O"]]) // >>> [3,5]

// WhereisWaldo([["c","c","c","c"],
//                ["c","c","c","c"],
//                ["c","c","c","d"]]) // >>> [3,4]

// const Kaido = [["d","c","c","c"],
//                ["c","c","c","c"],
//                ["c","c","c","c"]]; // >>> [3,4]

const Kaido = [["O","O","O","O","O"],
               ["O","O","O","O","O"],
               ["O","O","O","O","P"],
               ["O","O","O","O","O"],
               ["O","b","O","O","O"],
               ["O","O","O","O","O"]] // >>> [3,5]

const pro2 = (arr) => {
    let rowId, colId;

    const flat = arr.reduce((counter, letter) => {
        counter[letter] = (counter[letter] == undefined ? 1 : counter[letter] + 1)
        return counter;
    }, {})
    const oddLetter = Object.keys(letterCount).filter((letter) => letterCount[letter] == 1)[0];

    rowId = arr.findIndex((row) => row.includes(oddLetter));

    colId = arr[rowId].findIndex((col) => col == oddLetter);

    return [rowId + 1, colId+1];
} 

console.log(pro2(Kaido))






// const doublearray = (MongolBanharHazdag) => {
//  const element = MongolBanharHazdag[0][0];
//   for (let i = 0; i < MongolBanharHazdag.length; i++){
//       for (let j = 0; j < MongolBanharHazdag[i].length; j++) {
//           if (MongolBanharHazdag[i][j] != element) {
//               return [i + 1, j + 1]
//           }
//         // else{
//         //       return "[" + " " + chalk.keyword("yellow")(1)+"," + " "  +chalk.keyword("yellow")(1) + " " + "]" ;
//         //   }
//       }
//   };
//   return 'no odd el';
// };

// console.log(doublearray(Kaido))