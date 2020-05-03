function sum(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function calculate(fn, prev) {
  // return fn.bind(null, prev);
  return function f(num) {
    return fn(prev, num);
  };
}

const sum100 = calculate(sum, 100);
const divide100 = calculate(divide, 100);

console.log(sum100(20)); // 120
console.log(divide100(20)); // 5

// Bind 부분 적용 함수

// function add(a, b) {
//   return a + b;
// }

// const add10 = add.bind(undefined, 10);
// console.log(add10(20)); // 30
