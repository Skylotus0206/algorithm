// Number.EPSILON
function isEqual(a, b) {
  // Math.abs는 절댓값을 반환한다.
  // 즉 a와 b의 차이가 JavaScript에서 표현할 수 있는 가장 작은 수인 Number.EPSILON보다 작으면 같은 수로 인정할 수 있다.
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqual(0.1 + 0.2, 0.3));

// Maximums
const maxSafeInt =
  Number.MAX_SAFE_INTEGER + 1.11 === Number.MAX_SAFE_INTEGER + 2.33;
console.log(maxSafeInt);

const maxVal = Number.MAX_VALUE + 1.011 === Number.MAX_VALUE + 2.23;
console.log(maxVal);

// Minimums
const minSafeInt =
  Number.MIN_SAFE_INTEGER + 1.11 === Number.MIN_SAFE_INTEGER + 2.33;
console.log(minSafeInt);

console.log(Number.MIN_VALUE - 1 == -1);

// Primality Test
function isPrime(n) {
  // 1 먼저 확인
  if (n <= 1) {
    return false;
  }
  // check from 2 to n-1
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function improvedIsPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 == 0 || n % 3 == 0) return false;
  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }
    return true;
  }
}

// Prime Factorization
function primeFactors(n) {
  // print the number of 2s that divide n
  while (n % 2 == 0) {
    console.log(2);
    n = n / 2;
  }
  // n must be odd at this point, so we can skip one element (i = i+2)
  for (let i = 3; i * i <= n; i = i + 2) {
    // while i divides n, print i and divide n
    while (n % i == 0) {
      console.log(i);
      n = n / i;
    }
  }
  // this condition is to handle the case when n is a prime number
  if (n > 2) {
    console.log(n);
  }
}

primeFactors(10);

console.log(Math.random());
