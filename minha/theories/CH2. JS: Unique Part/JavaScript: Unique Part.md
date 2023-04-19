
# CHAPTER 2. JS: Unique Parts

# What should you learn in this course

This chapter will briefly discuss some exceptions and cases of JavaScript’s syntax and behavior. As a **dynamic** and **interpreted** programming language, its syntax is different from that of traditional object-oriented programming languages.

* What is Dynamic Typed Language?
  동적타입 언어는 런타임시 자료형이 결정되는 언어를 의미한다. 대표적으로 Python, Javascript, Ruby 등이 있다. 따라서 소스코드 작성 시 자료형을 명시적으로 지정해줄 필요가 없다.
* What is Interpreter Language?
  소스코드를 한줄 한 줄 읽어가며 명령을 바로 처리하는 프로그램 언어. 번역과 실행이 동시에 이루어진다.

These concepts are fundamental to JavaScript and will help you to develop a better understanding of the process of designing algorithms in JavaScript.

# JavaScript Scope

The scope is what defined the access to JS variables. In JS, variable s can belong to theglobal scope or to the local scope.

## Global Declaration: Global Scope

In JS, variables can be declared without using any operators. Here’s an example:

```jsx
test = "sss";
console.log(test); // prints "sss"
```

However, this creates a global variable, and this is one of the worst practices in JavaScript. Avoid doing this at all costs. Always use `var` or `let` to declare variables. Finally, when declaring variables that won’t be modified, use `const`.

## Declaration with var: Functional Scope

In JavaScript, var is one keyword used to declare variables.

These variable declarations **“float” all the way to the top.** This is known as  ***variable hoisting*** . Variables declared at the bottom of the script will not be the last thing executed in a JavaScript program during runtime.

* The key thing to note about the `var` keyword is that the scope of the variable is **the closest function scope.**
* 아래의 scope1 에서 bottom은 함수의 가장 마지막에 선언 되었지만, 에러 없이 bottom을 잘 출력한다. 왜냐하면 var는 선언과 초기화 단계가 동시에 진행하여 bottom에 대한 메모리 공간이 이미 확보된 상태이다. 따라서 bottom 값을 변수 선언 보다 일찍 했어도 데이터가 메모리에 잘 저장되는 것을 볼 수 있다.

```
// scope1 works the same as the second one
function scope1() {
  var top = 'top';
  bottom = 'bottom';
  console.log(bottom);

  var bottom;
}

scope1() // 출력 결과: bottom

function scope1_1() {
  var top = 'top';
  var bottom;
  bottom = 'bottom';
  console.log(bottom);
}
```

4 was printed, not the global value of 1, because it was redeclared and available in that scope.

```jsx
var a = 1;
function four() {
  if (true) {
    var a = 4;
  }
  console.log(a);
}
```

## Declaration with let: Block Scope

Another keyword that can be used to declare a variable is `let`. Any variables declared this way are in the closest block scope (meaning within the {} they were declared in).

* In this example, nothing is logged to the console because the `insideIf` variable is available **only inside the if statement block.**

```jsx
function scope3(print) {
  if (print) {
    let inside = '12';
  }
  console.log(inside);
}

scope3(true); // 출력 결과 ''
```

# Equality and Types

## Variable Types

In JavaScript, there are seven primitive data types: boolean, number, string, undefined, object, function, and symbol (symbol won’t be discussed).

One thing that stands out here is that `undefined` is a primitive value that is assigned to a variable that has just been declared.

## Truthy/Falsy Check

True/false checking is used in `**if statements`.** In many languages, the parameter inside the if() function must be a boolean type.

However, JavaScript (and other dynamically typed languages) is more flexible with this.

### Falsy Expressions

Here, node is some variable.

If that variable is `empty`, `null`, or `undefined`, it will be evaluated as  **false** .

Here are commonly used expressions that evaluate to false:

* false
* 0
* Empty strings ('' and "")
* NaN
* undefined
* null

```jsx
if(node) {
	---
}
```

```jsx
// truthy/falsy expression

const printIfTrue = '';
if (printIfTrue) {
  console.log('truthy');
} else {
  console.log('falsy');
}

// 출력 결과 falsy
```

### Truthy Expressions

Here are commonly used expressions that evaluate to true:

* true
* Any number other than 0
* Non-empty strings
* Non-empty object

## === vs ==

JavaScript is a scripting language, and variables are not assigned a type during declaration. Instead, types are interpreted as the code runs.

Hence, === is used to check equality more strictly than ==. === checks for both the type and the value, while == checks only for the value.

## Objects

* Although these objects are equivalent (same properties and values), they are not
  equal. Namely, **the variables have different addresses in memory.**

```jsx
// objects
var o1 = {};
var o2 = {};

o1 == o2; // false
o1 === o2; // false
```

This is why most JavaScript applications use utility libraries such as `lodash1` or
`underscore`,2 which have the isEqual( *object1* ,  *object2* ) function to check two objects
or values strictly.

# Summary

JavaScript has a different variable declaration technique than most programming languages. `var` declares the variable within the function scope, `let` declares the variable in the block scope, and variables can be declared without any operator in the global scope; however, global scope should be avoided at all times.

For type checking, `typeof` should be used to validate the expected type. Finally, for equality checks, use `==`to check the value, and use `===` to check for the type as well as the value. However, use these only on non-object types such as numbers, strings, and booleans.
