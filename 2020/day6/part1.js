const path = require('path');
const fs = require('fs');

const data = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.split("\n\n")
  .filter((x) => Boolean(x))
  .map((x) =>
    x
      .replace(/[\n ,]+/g, " ")
      .trim()
      .split(' ')
  )

let total = 0;
    for (const questions of data) {
        // const questionSet = new Set(questions);
        const questionSet = new Set(questions.join('').split('').join(''));
        total += questionSet.size;
        console.log(total)
        
    }