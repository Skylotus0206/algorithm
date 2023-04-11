let fs = require("fs");
let input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const x = Number(input[0]);
const y = Number(input[1]);
const w = Number(input[2]);
const h = Number(input[3]);

let case1 = h - y;
let case2 = y;
let case3 = w - x;
let case4 = x;

let answer = [case1, case2, case3, case4];

console.log(Math.min(...answer));
