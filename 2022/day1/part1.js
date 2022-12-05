const path = require("path");
const fs = require("fs");

const data = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n\n")
  .filter((x) => Boolean(x))
  .map((x) =>
    x
      .replace(/[\n ,]+/g, " ")
      .trim()
      .split(" ")
      .map((y) => parseInt(y))
  );

let elvesSum = [];

for (let i = 0; i < data.length; i++) {
  elvesSum[i] = data[i].reduce((p, a) => p + a, 0);
}
elvesSum.sort((a, b) => b - a);

let top3 = elvesSum[0] + elvesSum[1] + elvesSum[2];
console.log(top3);
