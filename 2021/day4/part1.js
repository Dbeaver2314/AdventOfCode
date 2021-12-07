
const path = require('path');
const fs = require('fs');


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


  let [drawnNumbers, ...cards] = data;

  class Card {
    constructor(numbers) {
      this.cardSize = 5;
      this.numbers = numbers;
      this.numberToPosition = new Map();
      for (let i = 0; i < this.numbers.length; i++) {
        const n = this.numbers[i];
        this.numberToPosition.set(n, {
          line: Math.floor(i / this.cardSize),
          column: i % this.cardSize,
        });
      }
      this.lines = Array(this.cardSize).fill(0);
      this.columns = Array(this.cardSize).fill(0);
      this.isComplete = false;
      this.markedNumbers = new Set();
    }
  
    addMarkedNumber(number) {
      const position = this.numberToPosition.get(number);
      if (!position) {
        return;
      }
      this.markedNumbers.add(number);
      this.lines[position.line]++;
      this.columns[position.column]++;
      if (
        this.lines[position.line] === this.cardSize ||
        this.columns[position.column] === this.cardSize
      ) {
        this.isComplete = true;
      }
    }
  
    unmarkedNumbers() {
      return this.numbers.filter((n) => !this.markedNumbers.has(n));
    }
  
  }
  
  function part1(_cards) {
    let cards = _cards.map((x) => new Card(x));
  
    let lastWinningCard;
    let lastWinningNumber;
    const actuallyDrawn = [];
    for (const drawn of drawnNumbers) {
      actuallyDrawn.push(drawn);
      let hasIncomplete = false;

      for (const card of cards) {
          if(!card.isComplete){
              hasIncomplete = true;
              card.addMarkedNumber(drawn);              
          
        
        if (card.isComplete) {
          lastWinningCard= card;
          lastWinningNumber = drawn;
          
        
        }
      }
    }
      if (!hasIncomplete) {
        break;
      }
    }
  
    const unmarkedNumbers = lastWinningCard.unmarkedNumbers();
  
    console.log(
        
      unmarkedNumbers.reduce((a, b) => a + b, 0) * lastWinningNumber)
    
  }
  
  part1(cards);
  