// Pipe function

const multi10 = (num) => num * 10;
const addStr = (num) => `숫자 = ${num}`;
const print = (str) => console.log(str);

function pipe(...functions) {
  return function pipeFn(...args) {
    console.log(functions, args);
    return functions.reduce((arg, fn) => {
      console.log(fn, arg);
      return fn(arg);
    }, args);
  };
}

const pipe = (...functions) => (...args) =>
  functions.reduce((arg, fn) => fn(arg), args);

pipe(multi10, addStr, print)(5);
// expected: "숫자 = 50"

// Partial Application

const sum = (a, b) => a + b;

// function calculate(fn, prev) {
//   return function calcFn(arg) {
//     return fn(prev, arg);
//   };
// }

const calculate = (fn, prev) => (arg) => fn(prev, arg);

const sum100 = calculate(sum, 100);
console.log(sum100(50));
