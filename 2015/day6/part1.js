/*

Because your neighbors keep defeating you in the holiday house decorating contest year after year, you've decided to deploy one million lights in a 1000x1000 grid.

Furthermore, because you've been especially nice this year, Santa has mailed you instructions on how to display the ideal lighting configuration.

Lights in your grid are numbered from 0 to 999 in each direction; the lights at each corner are at 0,0, 0,999, 999,999, and 999,0. The instructions include whether to turn on, turn off, or toggle various inclusive ranges given as coordinate pairs. Each coordinate pair represents opposite corners of a rectangle, inclusive; a coordinate pair like 0,0 through 2,2 therefore refers to 9 lights in a 3x3 square. The lights all start turned off.

To defeat your neighbors this year, all you have to do is set up your lights by doing the instructions Santa sent you in order.

For example:

    turn on 0,0 through 999,999 would turn on (or leave on) every light.
    toggle 0,0 through 999,0 would toggle the first line of 1000 lights, turning off the ones that were on, and turning on the ones that were off.
    turn off 499,499 through 500,500 would turn off (or leave off) the middle four lights.

After following the instructions, how many lights are lit?


make an object with X and Y and status

lets make a class with  functions for on, off and toggle

function for get count of on

constructor with on off
*/

const fs = require("fs");

const data = fs.readFileSync("./input.txt", { encoding: "utf-8" }).split("\n");

const lights = [];

console.log(lights);
let lightsOn = 0;

function setStatus(direction, cur) {
  if (direction == "turn on") {
    return cur + 1;
  }
  if (direction == "turn off") {
    return Math.max(cur - 1, 0);
  }
  if (direction == "toggle") {
    return cur + 2;
  }
}

function doLights(direction, x1, y1, x2, y2) {
  for (let i = x1; i <= x2; i++) {
    if (lights[i] == undefined) {
      lights[i] = [];
    }
    for (let k = y1; k <= y2; k++) {
      if (lights[i][k] == undefined) {
        lights[i][k] = 0;
      }
      lights[i][k] = setStatus(direction, lights[i][k]);
    }
  }
}

data.forEach((instruction) => {
  instruction = instruction.split(/(\w.*) (\d+),(\d+) \w+ (\d+),(\d+)/);
  instruction.shift();
  instruction.pop();
  doLights(
    instruction[0],
    Math.min(instruction[1], instruction[3]),
    Math.min(instruction[2], instruction[4]),
    Math.max(instruction[1], instruction[3]),
    Math.max(instruction[2], instruction[4])
  );
});

lights.forEach((e) => {
  e.forEach((light) => {
    lightsOn += light;
  });
});

console.log(lightsOn);
