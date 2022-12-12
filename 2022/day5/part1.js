/*
[P]     [C]         [M]            
[D]     [P] [B]     [V] [S]        
[Q] [V] [R] [V]     [G] [B]        
[R] [W] [G] [J]     [T] [M]     [V]
[V] [Q] [Q] [F] [C] [N] [V]     [W]
[B] [Z] [Z] [H] [L] [P] [L] [J] [N]
[H] [D] [L] [D] [W] [R] [R] [P] [C]
[F] [L] [H] [R] [Z] [J] [J] [D] [D]
 1   2   3   4   5   6   7   8   9 


 create array of arrays.

handle array indexing**

pull x off top of each array. 
reverse x. push into target array

*/
let input = [
  ["P", "D", "Q", "V", "B", "H", "F"],
  ["V", "W", "Q", "Z", "D", "L"],
  ["C", "P", "R", "G", "Q", "Z", "L", "H"],
  ["B", "V", "J", "F", "H", "D", "R"],
  ["C", "L", "W", "Z"],
  ["M", "V", "G", "T", "N", "P", "R", "J"],
  ["S", "B", "M", "V", "L", "R", "J"],
  ["J", "P", "D"],
  ["V", "W", "N", "C", "D"],
];

const fs = require("fs");

const data = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => x.split(" "));

data.forEach((arr) => {
  for (let i = 0; i < arr[1]; i++) {
    let from = parseInt(arr[3]) - 1;
    let to = parseInt(arr[5]) - 1;
    // let value = ;
    // console.log(input[from]);
    input[to].unshift(input[from].shift());
  }
});
console.log(input);

//LMPBQPCHF
//JDTMRWCQJ
