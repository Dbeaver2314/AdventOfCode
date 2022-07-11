// // Realizing the error of his ways, Santa has switched to a better model of determining whether a string is naughty or nice. None of the old rules apply, as they are all clearly ridiculous.

// // Now, a nice string is one with all of the following properties:

// //     It contains a pair of any two letters that appears at least twice in the string without overlapping, like xyxy (xy) or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).
// //     It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi (efe), or even aaa.

// // For example:

// //     qjhvhtzxzqqjkmpb is nice because is has a pair that appears twice (qj) and a letter that repeats with exactly one letter between them (zxz).
// //     xxyxx is nice because it has a pair that appears twice and a letter that repeats with one between, even though the letters used by each rule overlap.
// //     uurcxstgmygtbstg is naughty because it has a pair (tg) but no repeat with a single letter between them.
// //     ieodomkazucvgmuy is naughty because it has a repeating letter with one between (odo), but no pair that appears twice.

// // How many strings are nice under these new rules?

// /*
// SOLUTIONS

// 2 functions loop through data set

// 1 function loops through looking for duplicate letters 1 space apart. starting at i look at i+2 until i == length -2;

// 1 fuction that loops through each char in str. take i and i+1 then slice them out of the string, and check strPos >-1
//     if true toggle test to true and break
//     else keep looping until i = str.len -1

//     NEW SOLUTION

//     loop through data, if i%2 ==0 && rule1 == false
//      then
//     ~ check if i,i+1 is already in array
//     if so break out of this because SUCCESS
//     ~ push i,i+1 into even array

//   else if odd, i,i+1 repeat above and check odd array

//   while looping check for opposite of current (odd or even) and check the 2nd index of the previous
//    last element pushed into odd or even array and compare to i+1
//    if last index of last element of opposite array == i+1 and not I then success

// // */
// const fs = require("fs");

// const data = fs.readFileSync("./input.txt", "utf8");
// let niceWordCount = 0;

// data.forEach((string) => {
//   let test1 = false;
//   let test2 = false;

//   for (let i = 0; i < string.length; i++) {
//     let checkVal = string[i] + string[i + 1];
//     let stringArr = string.split("");
//     stringArr.splice(i, 2);
//     let word = stringArr.join("");

//     if (word.includes(checkVal)) {
//       test1 = true;
//     }
//   }

//   for (let j = 0; j <= string.length; j++) {
//     if (string[j] != string[j + 1] && string[j] == string[j + 2]) {
//       test2 = true;
//       continue;
//     }
//   }
//   if (test1 && test2) {
//     niceWordCount++;
//   }
// });
// console.log(niceWordCount);

// // for (let i = 0; i < string.length - 1; i++) {
// //   if (i % 2 === 0 && !test1 && !test2) {
// //     let checkVal = string[i] + string[i + 1];
// //     if (evenArr.includes(checkVal)) {
// //       test1 = true;
// //       test1arr.push(string);
// //     }
// //     evenArr.push(checkVal);
// //   } else if (i % 2 != 0 && !test1 && !test2) {
// //     let checkVal = string[i] + string[i + 1];
// //     if (oddArr.includes(checkVal)) {
// //       test1 = true;
// //       test1arr.push(string);
// //     }

// //     oddArr.push(checkVal);
// //   }
// //   console.log(evenArr, oddArr);
// // }

// // function check2(str) {
// //   for (let i = 0; i < str.length - 2; i++) {
// //     let char = str[i];
// //     if (str[i + 2] == char) {
// //       return true;
// //     }
// //     continue;
// //   }
// //   return false;
// // }

// // function check1(str) {
// //   for (let i = 0; i < str.length - 1; i++) {
// //     let checkStr = `${str[i]}${str[i + 1]}`;
// //     if (!holdArr.includes(checkStr)) {
// //       holdArr.push(checkStr);
// //       let tempStr = str.substring(0, i) + str.substring(i + 2, str.length);
// //       if (tempStr.indexOf(checkStr) > -1 && tempStr.indexOf(checkStr) != i) {
// //         return true;
// //       }
// //     }
// //     continue;
// //   }
// //   return false;
// // }

// // data.forEach((string) => {
// //   let test2 = check2(string);

// //   let test1 = check1(string);

// //   if (test2 && test1) {
// //     niceWordCount++;
// //   }
// // });

const fs = require("fs");

const input = fs.readFileSync("./input.txt", "utf8");

const strings = input.split("\n");

const niceStrings1 = strings.filter((str) => {
  let vowelMatch = str.match(/[aeiou]/g);
  return (
    vowelMatch &&
    vowelMatch.length >= 3 &&
    str.match(/(\w)\1/) &&
    !str.match(/ab|cd|pq|xy/)
  );
});

console.log("Nice #1:", niceStrings1.length);

const niceStrings2 = strings.filter((str) => {
  return str.match(/(\w\w)\w*\1/) && str.match(/(\w)\w\1/);
});

console.log("Nice #2:", niceStrings2.length);
