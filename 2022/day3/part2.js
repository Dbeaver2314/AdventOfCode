const path = require("path");
const fs = require("fs");

const data = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => x.replace(/[\n ,]+/g, " ").trim());
let total = 0;

function letterValue(x) {
  if (/[a-z]/.test(x)) {
    return x.charCodeAt(0) - 96;
  }
  if (/[A-Z]/.test(x)) {
    return x.charCodeAt(0) - 38;
  }
}

for (let i = 0; i < data.length - 3; i += 3) {
  let str1 = data[i].split("");
  let str2 = data[i + 1].split("");
  let str3 = data[i + 2].split("");

  let intersection = str2.filter((e) => str1.includes(e));
  let intersection2 = str3.filter((e) => intersection.includes(e));
  total += letterValue(intersection2[0]);
}

console.log(total);
