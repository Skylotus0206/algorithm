# CHAPTER3. JS Numbers

# What should you learn in this course

This chapter will focus on JavaScript number operations, number representation, Number objects, common number algorithms, and random number generation.

By the end of this chapter, you will understand how to work with numbers in JavaScript as well as how to impl

ement prime factorization, which is fundamental for encryption.

Number operations of a programming language allow you to compute numerical values. Here are the number operators in JavaScript:

`+ : addition

* : subtraction
  / : division
* : multiplication
  % : modulus`

# Number System

JavaScript uses a 64-bit, double precision floating point numbers, as shown in the below.

* The sign bit (the 31st bit): positive is 0, negative is 1.
* The nex 8 bits: the exponent value.
* The remaining 23 bits represent the fraction value.

![The 32-bit floating-point number system](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b4d61d36-0ac6-4f34-b723-41aabf734474/Untitled.png)

The 32-bit floating-point number system

This results in the following:

$$
```
				value = 1 x 2124-127 x 1.25 = 1 x 2-3 x 1.25 = 0.15625 
```
$$

With decimal fractions, this floating-point number system causes some rounding
errors in JavaScript. For example, **0.1 and 0.2 cannot be represented precisely.**

* 자바스크립트의 숫자 시스템은 다른 언어와 달리 32-bit floating-point representation을 사용하고 있다.
* 기본적으로 숫자는 컴퓨터에 저장될 때 2진수로 저장된다. 그러나, 숫자 10이 2진수로 저장될 때 1001로 저장되는 것과 달리, 소수점은 깔끔하게 떨어지지 않는다. 따라서 아래와 같은 결과가 나온다.

```jsx
0.1 + 0.2 === 0.3 // false
```

To really understand why 0.1 cannot be represented properly as a 32-bit floating-
point number, you must understand  **binary** . Representing many decimals in binary
requires an infinite number of digits. This because binary numbers are represented by $2^n$ **where *n* is an integer.

# JavaScript Number Object

## Integer Rounding

Since JavaScript uses floating point to represent all numbers, integer division does not work.

* What is integer division?
  3/2 = 1, 항상 정수만 리턴하는 나눗셈. round down 값을 반환

Integer division in programming languages like Java simply evaluates division expressions to their quotient (몫).

For example, `5/4` is 1 in Java because the quotient is `1` (although there is a remainder of 1 left). However, in JavaScript, it is a floating point. `5/4 = 1.25`

This is because Java requires you to explicitly (명시적으로, 확실하게) type the integer as an integer.

Hence, the result cannot be a floating point. However, if JavaScript developers want to implement integer division, they can do one of the following:

`Math.round - rounds to nearest integer`

`Math.floor - rounds down to nearest integer`

`Math.ceil  - rounds up to nearest integer`

## Number.EPSLION

`Number.EPSILON` returns the smallest interval between two representable numbers. This is useful for the problem with floating-point approximation.

```jsx
function isEqual(a, b) {
  // Math.abs는 절댓값을 반환한다.
  // 즉 a와 b의 차이가 JavaScript에서 표현할 수 있는 가장 작은 수인 Number.EPSILON보다 작으면 같은 수로 인정할 수 있다.
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqual(0.1 + 0.2, 0.3));
```

This function works by checking whether the difference between the two numbers
are smaller than `Number.EPSILON`.

Remember that Number.EPSILON is **the smallest difference between two *representable* numbers.** The difference between 0.1+0.2 and 0.3 will be smaller than Number.EPSILON.

⇒ For example, the smallest number among the bigger number in 0.1 will be 0.00000000001…. something. However, computer can recognize that small number so they decide epsilon which is the smallest number of JS to compare the size of numbers. Therefore, the smallest number among the bigger number in 0.1 will be `0.1 + EPSILON`

## Maximums

### Number.MAX_SAFE_INTEGER

It returns  **the largest integer** .

* what is integer?
  정수. 정수는 양의정수, 음의정수, 그리고 0이 있다. (분수, 소수 등 포함 x)
* The value of the largest integer n such that n and n + 1 are both exactly representable as
  a Number value. Therefore, **it does not work for floating-point decimals.**

```jsx
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2); 

// true

const maxSafeInt =
  Number.MAX_SAFE_INTEGER + 1.11 === Number.MAX_SAFE_INTEGER + 2.33;
console.log(maxSafeInt);

// false. It returns only the integer
```

### Number.MAX_VALUE

It returns **the largest floating-point number** possible. Equal to approximately 1.79E+308.

Therefore, this uses double-precision floating-point representation and works for floating points as well.

```jsx
const maxVal = Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2;
console.log(maxVal);

// true

const maxVal = Number.MAX_VALUE + 1.011 === Number.MAX_VALUE + 2.23;
console.log(maxVal);

// true
```

## Minimums

### Number.MIN_SAFE_INTEGER

It returns the smallest integer. It is equal to -9007199254740991.

### Number.MIN_VALUE

Number.MIN_VALUE returns the smallest floating-point number possible.

OR T**he closest number to zero** that can be represented in JavaScript.

Number.MIN_VALUE is equal to 5e-324. This is **not a negative number** since it is the
smallest *floating-point* number possible and means that Number.MIN_VALUE is actually
bigger than Number.MIN_- SAFE_INTEGER.

Number.MIN_VALUE is also the closest floating point to zero.

## Infinity

The only thing greater than Number.MAX_VALUE is Infinity, and the only thing smaller than Number.MAX_SAFE_INTEGER is -Infinity.

```jsx
Infinity > Number.MAX_SAFE_INTEGER; // true;
-Infinity < Number.MAX_SAFE_INTEGER // true;
-Infinity -32323323 == -Infinity -1; // true
```

## Size Summary

`Infinity < Number.MIN_SAFE_INTEGER < Number.MIN_VALUE < 0 < Number.MAX_ SAFE_IN- TEGER < Number.MAX_VALUE < Infinity`

# Number Algorithms

## Primality Test

A primality test can be done by iterating from 2 to  *n* , checking whether modulus division
(remainder) is equal to zero.

* What is prime number?
  소수. It is a [natural number](https://en.wikipedia.org/wiki/Natural_number) greater than 1 that is not a [product](https://en.wikipedia.org/wiki/Product_(mathematics)) of two smaller natural numbers.
  What is a product? ⇒ In [mathematics](https://en.wikipedia.org/wiki/Mathematics), a **product** is the result of [multiplication](https://en.wikipedia.org/wiki/Multiplication), or an [expression](https://en.wikipedia.org/wiki/Mathematical_expression) that identifies [objects](https://en.wikipedia.org/wiki/Mathematical_object) (numbers or [variables](https://en.wikipedia.org/wiki/Variable_(mathematics))) to be multiplied, called *factors.* For example, 30 is the product of 6 and 5 (the result of multiplication)

```
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
```

### Time Complexity: O(n)

The time complexity is O( *n* ) because this algorithm checks all numbers from 0 to  *n* .

### How to improve the Time Complexity?

1. Think about how this method iterates through 2 to  *n* . Is it possible to find a pattern and make the algorithm faster? First, any multiple of 2s can be ignored, but there is more optimization possible. This is difficult to notice, but all primes are of the form `**6k ± 1**`, **with the exception of 2 and 3** where k is some integer. Here’s an example:

$$
5 = (6-1), 13 = ((2*6) +1)
$$

1. Also realize that for testing the prime number  *n* , the loop only has to test until the
   **`square root of *n*`** . This is because if the square root of *n* is not a prime number, *n* is not a
   prime number by mathematical definition.

```jsx
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
```

### After Time Complexity: O( *sqrt* ( *n* ))

This improved solution cuts the time complexity down significantly.

## Prime Factorization

Prime numbers are the basis of **encryption** (covered in Chapter 4) and **hashing**
(covered in Chapter 11), and *prime factorization* is the process of determining which
prime numbers multiply to a given number. Given 10, it would print 5 and 2.

```
function primeFactors(n) {
  // print the number of 2s that divide n
  while (n % 2 == 0) {
    console.log(2);
    n = n / 2;
  }
  // n must be odd at this point, so we can skip one element (i = i+2)
  for (let i = 3; i * i <= n; i = i + 2) {
    // printing any number that is divisible by i without a remainder
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
```

### **Time Complexity:** O(sqrt(n))

This algorithm works by printing any number that is divisible by i without a
remainder. In the case that a prime number is passed into this function, it would be
handled by printing whether *n* is greater than 2.

# Random Number Generator

Random number generation is important to simulate conditions. JavaScript has a built-in
function for generating numbers: `Math.random()`

> It **returns a float between 0 and 1.

### To get floating points higher than 1

Simply multiply Math.random() by the range. Add or subtract from it to set the base.

```jsx
Math.random() * 100; // floats between 0  and  100
Math.random() * 25 + 5; // floats between 5  and  30
Math.random() * 10 - 100; // floats between -100 and -90
```

### To get random integers

Simply use Math.floor(), Math.round(), or Math.ceil() to round to an integer.

```jsx
Math.floor(Math.random() * 100); // integer between 0 and 99 
Math.round(Math.random() * 25) + 5; // integer between 5 and 30 
Math.ceil(Math.random() * 10) - 100; // integer between -100 and -90
```

# Summary

Recall that all numbers in JavaScript are in 64-bit floating point format.

To get the smallest possible floating point increment, you should use Number.EPILSON. The
maximum and minimum numbers of JavaScript can be summarized by the following inequality:

```
-Infinity < Number.MIN_SAFE_INTEGER < Number.MIN_VALUE < 0
< Number.MAX_SAFE_INTEGER < Number.MAX_VALUE < Infinity
```

Prime number validation and prime factorization are concepts used in various computer science applications such as encryption, as covered in Chapter 4. Finally, random number generation in JavaScript works via Math.random().
