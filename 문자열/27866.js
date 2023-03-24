let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let answer = "";
let S = input[0].split("");
let i = Number(input[1]);

for (let j = 1; j < S.length; j++) {
  if (i === j) {
    answer += S[i - 1];
  }
}

console.log(answer);
