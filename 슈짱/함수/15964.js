let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split(" ");

function caculate(text1, text2) {
  let num1 = Number(text1);
  let num2 = Number(text2);

  return (num1 + num2) * (num1 - num2);
}

console.log(caculate(input[0], input[1]));
