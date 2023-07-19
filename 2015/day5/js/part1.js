/*
Santa needs help figuring out which strings in his text file are naughty or nice.

A nice string is one with all of the following properties:

    It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
    It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
    It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.

For example:

    ugknbfddgicrmopn is nice because it has at least three vowels (u...i...o...), a double letter (...dd...), and none of the disallowed substrings.
    aaa is nice because it has at least three vowels and a double letter, even though the letters used by different rules overlap.
    jchzalrnumimnmhp is naughty because it has no double letter.
    haegwjzuvuyypxyu is naughty because it contains the string xy.
    dvszwmarrgswjxmb is naughty because it contains only one vowel.

How many strings are nice?


SOLUTION 
loop through each character of each string, keep a list of all characters as we go in an array.
push all chars into the array.
if the current index of the string is the same as the last element of the array
toggle var DuplicateChar to true.

each time a vowel is found remove it from the vowels array ( gets reset at the start of each loop)
at the end if the vowels array length is <=1 then vowelsTest = true.
finally as we loop through chars if the last char of the char list arr we push each letter into and the current index are not in the bad list
then the bad list bool can remain true. else it gets flipped to false.

*/
const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf8").split("\n");
let niceWordCount = 0;

const forbiddenArr = ["ab", "cd", "pq", "xy"];
const vowelArr = ["a", "e", "i", "o", "u"];

data.forEach((string) => {
  let charSet = [];
  let vowelCount = 0;

  let vowelTest = false;
  let dupeTest = false;
  let forbiddenTest = true;
  for (let i = 0; i <= string.length; i++) {
    if (vowelArr.includes(string[i])) {
      vowelCount++;
    }
    if (i > 0) {
      if (string[i] == charSet[charSet.length - 1]) {
        dupeTest = true;
      }
      if (forbiddenArr.includes(`${charSet[charSet.length - 1]}${string[i]}`)) {
        forbiddenTest = false;
      }
    }
    charSet.push(string[i]);
  }

  if (vowelCount > 2) {
    vowelTest = true;
  }
  if (vowelTest && dupeTest && forbiddenTest) {
    niceWordCount++;
  }
});

console.log(niceWordCount);
