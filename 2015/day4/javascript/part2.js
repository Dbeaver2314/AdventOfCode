const crypto = require("crypto");
let code = "";
let str = 0;
while (code.substring(0, 6) != "000000") {
  str++;
  console.log(str);
  code = crypto.createHash("md5").update(`bgvyzdsv${str}`).digest("hex");
}

console.log(str);
