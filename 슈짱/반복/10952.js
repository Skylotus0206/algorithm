let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let answer = "";

for (let text of input) {
  let arr = text.split(" ");

  let num = Number(arr[0]) + Number(arr[1]);
  if (num === 0) {
    break;
  }
  answer += `${num}\n`;
}

console.log(answer);
