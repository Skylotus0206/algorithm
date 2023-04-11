let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim();

//  0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1이다.
// n이 주어졌을 때, n번째 피보나치 수를 구하는 프로그램을 작성하시오.
// 재귀보다 간편한 방법이 있어 for문으로 풀어본다.
let fibo = [0, 1];

for (let i = 2; i <= Number(input); i++) {
  fibo.push(fibo[i - 1] + fibo[i - 2]);
}

console.log(fibo[Number(input)]);
