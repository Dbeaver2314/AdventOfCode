const fs = require("fs");

const data = fs.readFileSync("input.txt", { encoding: "utf-8" });

let hold = "";
for (let i = 0; i < data.length; i++) {
  if (hold.length < 4) {
    hold += data[i];
  } else {
    let dataArr = hold.split("");
    let dataSet = new Set(dataArr);
    console.log(dataSet);

    if (dataSet.size == 4) {
      console.log(data.indexOf(hold) + 4);
      break;
    } else {
      dataArr.shift();
      hold = dataArr.join("") + data[i];
      //   console.log(hold);
    }
  }
}
