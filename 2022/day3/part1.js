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

data.forEach((e) => {
  let str1 = e.slice(0, e.length / 2);
  let str2 = e.slice(e.length / 2, e.length);
  let str1Set = new Set([...str1]);
  let i = 0;
  for (let i = 0; i < str2.length; i++) {
    if (str1Set.has(str2[i])) {
      total += letterValue(str2[i]);
      break;
    }
  }
});
console.log(total);
