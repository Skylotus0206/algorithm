let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
let answer = "";

for (let i = 1; i <= input; i++) {
  answer += i + "\n";
}

//  하나씩 출력하면 시간초과로 안되니 문자열에 넣어주자
console.log(answer);
