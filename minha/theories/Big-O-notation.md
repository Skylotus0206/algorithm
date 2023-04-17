# Big-O Notation Primer

You will understand how to analyze an implementation of an algorithm with respect to both **time** (execution time) and **space** (memory consumed).

<aside>
📝 n represents the number of inputs

</aside>

## Common Examples

O(1)

is referred to as being ***constant time*** as it does not change with respect to input space.

ex) O(1) algorithm is accessing an item in the array by its index

### O(n)

is ***linear time*** and applies to algorithms that must do n operations in the worst-case scenario.

```jsx
function exampleLinear(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
}
```

### O($n^2$) and O($n^3$)

Similarly, O(*n*2) is **quadratic** time, and O(*n*3) is **cubic** time.

```jsx
// O(n^2) 
function quadratic(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
    for (let j = i; j < n; j++) {
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
```

### O($log n$) log2

```jsx
function Logarithmic(n) {
  for (let i = 2; i <= n; i = i * 2) {
    console.log(i);
  }
}

// 출력 결과 2, 4, 8, 16, 32, 64
```

Finally, an example algorithm of logarithmic time complexity is printing elements that are a power of 2 between 2 and  *n* . For example, exampleLogarithmic(10) will print `2, 4, 8, 16, 32, 64` ⇒ 2의 제곱을 출력

The efficiency of logarithmic time complexities i**s apparent with large inputs** such
as a million items.

Although *n* is a million, exampleLogarithmic will print only 19 items because log2(1,000,000) = 19.9315686.

Big-O Notation Primer

# Time Complexity - Rules of Big O Notation

The goal of algorithm analysis is to understand the algorithm’s efficiency by calculating f( *n* ).

* *`n`* represents the number of inputs
* `f(*n*)time` represents the time needed
* `f(*n*)space` represents the space (additional memory) needed for the algorithm

## Coefficient Rule

<aside>
📝 If f( *n* ) is O(g( *n* )), then kf( *n* ) is O(g( *n* )), for any constant k > 0.

</aside>

This means that both 5f( *n* ) and f( *n* ) have the same Big-O notation of O(f( *n* )).

This is because if *n* is close to infinity or another large number, those four additional operations are meaningless.  **It is going to perform it *n* times** . Any constants are negligible in Big-O notation.

⇒ n의 값은 무한대를 바라보기 때문에 사실상 계수의 의미가 사라진다.

## Sum Rule

$$
f(n)+g(n) = O(h(n))+O(g(n))
$$

<aside>
📝 If f( *n* ) is O(h( *n* )) and g( *n* ) is O(p( *n* )), then f( *n* )+g( *n* ) is O(h( *n* )+p( *n* )).

</aside>

Time complexities can be added. Therefore, Big-O notation is also the sum of two different Big-O notations.

It is important to remember to apply **the coefficient rule after applying this rule.**

* The following code block demonstrates a function with two main loops whose time complexities must be considered independently and then summed:
* In this example, line 4 has f( *n* ) =  *n* , and line 7 has f( *n* ) = 5 *n* . This results in 6 *n* .
  However, when applying the coefficient rule, the final result is O( *n* ) =  *n* .

```jsx
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
```

## Product Rule (곱셈)

$$
f(n)*g(n) = O(h(n)O(g(n))
$$

<aside>
📝 If f( *n* ) is O(h( *n* )) and g( *n* ) is O(p( *n* )), then f( *n* )g( *n* ) is O(h( *n* )p( *n* )).

</aside>

Similarly, the product rule states that Big-O is multiplied when the time complexities are multiplied.

* In this example, f( *n* ) = 5*n***n* because line 7 runs 5*n* times for a total of *n* iterations.
* Therefore, this results in a total of 5*n*2 operations. Applying the coefficient rule, the result is that  **O( *n* )=$ *n^2* $** .

```
function quadratic(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
    for (let j = i; j < 5 * n; j++) {
      console.log(j);
    }
  }
}
```

## Transitive Rule

$$
f(n) = g(n), O(g(n)) = O(h(n))
$$

If f( *n* ) is O(g( *n* )) and g( *n* ) is O(h( *n* )), then f( *n* ) is O(h( *n* )). The transitive rule is a simple way to state that the same time complexity has the same Big-O.

## Polynomial Rule

$$
f(n) = O(n^k)
$$

<aside>
📝 If f( *n* ) is a polynomial of degree k, then f( *n* ) is O(*n^*k).

⇒ quadratic time complexity

</aside>

Intuitively, the polynomial rule states that polynomial time complexities have Big-O of the same polynomial degree.

* The following code block has only one for loop with quadratic time complexity:
* In this example, f( *n* ) = *n*ˆ2 because line 4 runs  *n* **n* iterations.

```
function exampleLinear(n) {
  for (var i = 0; i < n * n; i++) {
    console.log(i);
  }
}
```

## Log of a Power Rule (로그)

log(*n*k) is O(log( *n* )) for any constant k > 0. With the log of a power rule, constants within a log function are also ignored in Big-O notation.

# Space Complexity - Rules of Big O Notation

How much additional memory do we need to allocate in order to run the code in our algorithm?

When we talk about space complexity, technically we’ll be talking about auxiliary space complexity.

## Rule of Thumb

Most primitives are **constant space** (booleans, numbers, undefined, null) - it talke one space for each.

**Strings** require O(n) space (where n is the string length)

**Reference types** are generally O(n):

* array: where n is the length of the array
* object: where n is the number of keys
