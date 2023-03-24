let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split(" ");

// 제곱한수를 10으로 나눈 나머지

function setNumber(text1, text2, text3, text4, text5) {
  let num1 = Number(text1);
  let num2 = Number(text2);
  let num3 = Number(text3);
  let num4 = Number(text4);
  let num5 = Number(text5);

  return (
    (num1 * num1 + num2 * num2 + num3 * num3 + num4 * num4 + num5 * num5) % 10
  );
}

console.log(
  setNumber(input[0], input[1], input[2], input[3], input[4], input[5])
);
