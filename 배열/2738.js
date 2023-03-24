const [[row, col], ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const A = inputs.slice(0, row);
const B = inputs.slice(row);

for (let r = 0; r < row; r++) {
  for (let c = 0; c < col; c++) {
    A[r][c] += B[r][c];
  }
}

const sol = [];
A.forEach((line) => sol.push(line.join(" ")));

console.log(sol.join("\n"));
