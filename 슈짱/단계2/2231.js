const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const constructorArr = [];

function d(n) {
  const N = n.toString().split("");
  return n + N.reduce((acc, num) => (acc += parseInt(num)), 0);
}

for (let i = 0; i <= Number(input); i++) {
  if (d(i) === Number(input)) {
    constructorArr.push(i);
  }
}

if (constructorArr.length) {
  console.log(Math.min.apply(null, constructorArr));
  // Math.max() 메소드를 사용하면, arguments로 받은 숫자 값 중에서 가장 큰 값을 뽑아줍니다.
  // 하지만, 해당 arguments가 배열로 이루어져 있을 경우에는 바로 값을 뽑을 수 없습니다.
  // (NaN 반환) Math.max()의 argument에는 숫자만 들어갈 수 있기 때문인데요, 이때 .apply를 쓰면 이를 해결할 수 있습니다.
} else {
  console.log(0);
}
