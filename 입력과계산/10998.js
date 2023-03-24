let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split(" ");

console.log(Number(input[0]) * Number(input[1]));
