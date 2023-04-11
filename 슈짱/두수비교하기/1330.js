let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split(" ");

let num1 = Number(input[0]);
let num2 = Number(input[1]);

if (num1 === num2) {
  console.log("==");
}
if (num1 > num2) {
  console.log(">");
}
if (num1 < num2) {
  console.log("<");
}
