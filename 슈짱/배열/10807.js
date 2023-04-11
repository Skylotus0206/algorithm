let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let sequence = input[1].split(" ");
let X = Number(input[2]);

let count = 0;

for (let val of sequence) {
  let num = Number(val);
  if (num === X) {
    count += 1;
  }
}
console.log(count);
