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

let groupSize;
let total = 0;
    for (const questions of data) {
        groupSize = questions.length;
        const groupSet = new Set(questions.join(''));
        for (let i = 0; i < questions.length; i++) {
            let hold = questions[i].split('');
            for (const letter of groupSet) {
                if (!hold.includes(letter)){
                    groupSet.delete(letter);
                }
                
            }

            
        }
       
        total = total + groupSet.size;
        
    }
    console.log(total);