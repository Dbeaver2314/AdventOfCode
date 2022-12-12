const fs = require("fs");

const data = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) =>
    x
      .replace(/[\n ,]+/g, " ")
      .trim()
      .split(" ")
      .map((y) => y.split("-"))
      .sort((a, b) => b[0] - a[0])
  );
let total = 0;

data.forEach((e) => {
  let lowerBoundA = parseInt(e[0][0]);
  let lowerBoundB = parseInt(e[1][0]);
  let upperBoundA = parseInt(e[0][1]);
  let upperBoundB = parseInt(e[1][1]);

  if (lowerBoundA == lowerBoundB) {
    total++;
  } else {
    if (lowerBoundA <= upperBoundB && lowerBoundA >= lowerBoundB) {
      total++;
    } else if (lowerBoundB >= lowerBoundA && lowerBoundB <= upperBoundA) {
      total++;
    }
  }
});
// 441
console.log(total);
