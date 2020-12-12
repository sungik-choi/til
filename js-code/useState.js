const MyReact = (() => {
  let value;

  return {
    render(Component) {
      const comp = Component();
      comp.render();
      return comp;
    },
    useState(_initVal) {
      const state = value || _initVal;
      const setState = newValue => {
        value = newValue;
      };
      return [state, setState];
    },
  };
})();

function MyComponent() {
  const [foo, setFoo] = MyReact.useState(10);
  return {
    render() {
      setFoo(foo + 1);
      console.log(`foo value is ${foo}`);
    },
  };
}
// 아래처럼 3번 렌더링이 일어난다고 가정한다.
MyReact.render(MyComponent);
MyReact.render(MyComponent);
MyReact.render(MyComponent);

// 실행결과
// foo value is 10
// foo value is 11
// foo value is 12
