// var examples
function scope1() {
  var top = 'top';
  bottom = 'bottom';
  console.log(bottom);

  var bottom;
}

function scope1_1() {
  var top = 'top';
  var bottom;
  bottom = 'bottom';
  console.log(bottom);
}

var a = 1;
function four() {
  if (true) {
    var a = 4;
  }
  console.log(a);
}

// let example
function scope3(print) {
  if (print) {
    let inside = '12';
    console.log(inside);
  }
}

scope3(true);

// truthy/falsy expression
const printIfTrue = '';
if (printIfTrue) {
  console.log('truthy');
} else {
  console.log('falsy');
}

// objects
var o1 = {};
var o2 = {};

o1 == o2; // false
o1 === o2; // false
