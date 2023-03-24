let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let frequencyCount = {};

for (let val of input) {
  let num = Number(val);

  frequencyCount[num] = 1;
}

for (let i = 1; i < 31; i++) {
  if (frequencyCount[`${i}`] !== 1) {
    console.log(i);
  }
}
