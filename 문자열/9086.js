let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n").splice(1);

let answer = "";
let count = 0;
// console.log(input[0]);
for (let i = 0; i < input.length; i++) {
  for (let val of input[i]) {
    if (input[i].length === 1) {
      answer += `${val}${val}\n`;
    }
    if (input[i].length === 2) {
      answer += `${val}`;
    }
    if (count === 0) {
      answer += `${val}`;
      count++;
    } else if (count === input[i].length) {
      answer += `${val}\n`;
    }
    count++;
  }
}

console.log(answer);
