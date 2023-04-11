let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let X = Number(input[0].split(" ")[1]);

let sequence = input[1].split(" ");
let answer = "";

for (let val of sequence) {
  let num = Number(val);
  if (num < X) {
    answer += `${num} `;
  }
}
console.log(answer);
