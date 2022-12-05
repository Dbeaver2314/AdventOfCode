const path = require("path");
const fs = require("fs");

const data = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x))
  .map((x) => x.replace(/[\n ,]+/g, " ").trim());

let outcomeValue = {
  X: 0,
  Y: 3,
  Z: 6,
};
let total = 0;

let shapeValue = {
  A: 1,
  B: 2,
  C: 3,
};

const wins = {
  A: 2,
  B: 3,
  C: 1,
};
const draws = {
  A: 1,
  B: 2,
  C: 3,
};

const loses = {
  A: 3,
  B: 1,
  C: 2,
};

data.forEach((e) => {
  total += outcomeValue[e.slice(-1)];
  if (e.slice(-1) == "X") {
    total += loses[e[0]];
  } else if (e.slice(-1) == "Y") {
    total += draws[e[0]];
  } else if (e.slice(-1) == "Z") {
    total += wins[e[0]];
  }
});
console.log(total);
