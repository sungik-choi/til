function foo() {
  const x = 10;
  function bar() {
    console.log(x);
  }
  return bar();
}

foo();
