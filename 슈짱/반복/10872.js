let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

function fac(num) {
  if (num === 0) return 1;
  if (num < 2) return num;
  return num * fac(num - 1);
}

console.log(fac(Number(input)));
