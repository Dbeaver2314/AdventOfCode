// A for Rock, B for Paper, and C f
const path = require("path");
const fs = require("fs");

const data = fs.readFileSync("input.txt", { encoding: "utf-8" }).split("\n");
// .filter((x) => Boolean(x))
// .map((x) => x.replace(/[\n ,]+/g, " ").trim());
// console.log(data);

let shapeValue = {
  X: 1,
  Y: 2,
  Z: 3,
};
let total = 0;

const ELF_ROCK = "A";
const ELF_PAPER = "B";
const ELF_SCISSOR = "C";

const PLAYER_ROCK = "X";
const PLAYER_PAPER = "Y";
const PLAYER_SCISSOR = "Z";

const wins = [
  `${ELF_ROCK} ${PLAYER_PAPER}`,
  `${ELF_PAPER} ${PLAYER_SCISSOR}`,
  `${ELF_SCISSOR} ${PLAYER_ROCK}`,
];
const draws = [
  `${ELF_PAPER} ${PLAYER_PAPER}`,
  `${ELF_ROCK} ${PLAYER_ROCK}`,
  `${ELF_SCISSOR} ${PLAYER_SCISSOR}`,
];

data.forEach((e) => {
  total += shapeValue[e.slice(-1)];
  if (wins.includes(e)) {
    total += 6;
  } else if (draws.includes(e)) {
    total += 3;
  }
});
console.log(total);
