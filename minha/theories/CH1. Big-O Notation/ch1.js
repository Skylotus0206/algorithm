// O(n)
function exampleLinear(n) {
  for (var i = 0; i < n * n; i++) {
    console.log(i);
  }
}

// O(n^2)
function quadratic(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
    for (let j = i; j < 5 * n; j++) {
      console.log(j);
    }
  }
}

// O(n^3)
function cubic(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
    for (let j = i; j < n; j++) {
      console.log(j);
      for (let k = j; j < n; j++) {
        console.log(k);
      }
    }
  }
}

function Logarithmic(n) {
  for (let i = 2; i <= n; i = i * 2) {
    console.log(i);
  }
}

function a(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
  }
  for (let i = 0; i < 5 * n; i++) {
    count += 1;
  }
  return count;
}
