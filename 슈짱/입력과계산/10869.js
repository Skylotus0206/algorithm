let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split(" ");

let num1 = Number(input[0]);
let num2 = Number(input[1]);

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(Math.floor(num1 / num2));
console.log(num1 % num2);
