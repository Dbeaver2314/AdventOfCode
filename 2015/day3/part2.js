// Santa is delivering presents to an infinite two-dimensional grid of houses.

// He begins by delivering a present to the house at his starting location, and then an elf at the North Pole calls him via radio and tells him where to move next. Moves are always exactly one house to the north (^), south (v), east (>), or west (<). After each move, he delivers another present to the house at his new location.

// However, the elf back at the north pole has had a little too much eggnog, and so his directions are a little off, and Santa ends up visiting some houses more than once. How many houses receive at least one present?

// For example:

//     > delivers presents to 2 houses: one at the starting location, and one to the east.
//     ^>v< delivers presents to 4 houses in a square, including twice to the house at his starting/ending location.
//     ^v^v^v^v^v delivers a bunch of presents to some very lucky children at only 2 houses.

// in santa add 2 funcs for do robo santa and do santa, so they use the same this.visited. will need a new this.santax and this.roboX
const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf8").split("");
class Santa {
  constructor(directions) {
    this.santaDirections = directions.filter((e, i) => i % 2 == 0);
    this.roboSantaDirection = directions.filter((e, i) => i % 2 != 0);

    this.x = 0;
    this.y = 0;

    this.visited = {};
  }
  doSantaTravel() {
    this.visited[`${this.x},${this.y}`] = 1;
    this.santaDirections.forEach((direction) => {
      if (direction == "^") {
        this.y--;
      } else if (direction == "v") {
        this.y++;
      } else if (direction == ">") {
        this.x++;
      } else if (direction == "<") {
        this.x--;
      }
      this.visited[`${this.x},${this.y}`] = 1;
    });
  }
  doRoboSantaTavel() {
    this.y = 0;
    this.x = 0;
    this.visited[`${this.x},${this.y}`] = 1;
    this.roboSantaDirection.forEach((direction) => {
      if (direction == "^") {
        this.y--;
      } else if (direction == "v") {
        this.y++;
      } else if (direction == ">") {
        this.x++;
      } else if (direction == "<") {
        this.x--;
      }
      this.visited[`${this.x},${this.y}`] = 1;
    });
  }

  getCount() {
    this.doSantaTravel();
    this.doRoboSantaTavel();
    console.log(Object.values(this.visited).reduce((a, b) => a + b, 0));
  }
}
let santa = new Santa(data);

santa.getCount();
