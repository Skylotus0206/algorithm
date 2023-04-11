const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const A = input.shift().sort((a, b) => a - b);
const B = input.shift().sort((a, b) => a - b);

let answer = A.length + B.length;

A.forEach((a) => {
  let start = 0;
  let end = B.length - 1;

  let find = false;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (B[middle] === a) {
      find = true;
      break;
    }
    if (B[middle] < a) start = middle + 1;
    else end = middle - 1;
  }
  if (find) {
    answer--;
  }
});
B.forEach((a) => {
  let start = 0;
  let end = A.length - 1;

  let find = false;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (A[middle] === a) {
      find = true;
      break;
    }
    if (A[middle] < a) start = middle + 1;
    else end = middle - 1;
  }
  if (find) {
    answer--;
  }
});
console.log(answer);
