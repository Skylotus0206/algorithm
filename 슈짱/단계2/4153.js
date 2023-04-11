const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
input.splice(-1);
let testcase = input.map((a) =>
  a
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b)
);
// sort함수는 오름차순정렬

testcase.forEach((a) =>
  a[0] * a[0] + a[1] * a[1] == a[2] * a[2]
    ? console.log("right")
    : console.log("wrong")
);

console.log(testcase);
