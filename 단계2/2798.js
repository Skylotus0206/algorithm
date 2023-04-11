const [[N, M], ...rest] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

let answer = 0;
let cards = rest[0];
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      const gap = M - sum;
      if (gap >= 0 && answer <= sum) {
        answer = sum;
      }
    }
  }
}
//  i === 0일때 j 는 N번돔 그리고 J 0 일때도는 n번돔
console.log(answer);

// console.log(rest[0]);
