# 스코프와 비동기적 실행

```JavaScript
function countdown() {
  let i; // i를 for문 밖에서 선언
  console.log("Countdown");
  for(i = 5; i >= 0; i--) {
    setTimeout(() => {
      console.log(i === 0 ? "GO!" : i);
    }, (5-i)*1000);
  }
  countdown();
}
```

코드를 보면 5에서 부터 카운트 다운되는, 아래와 같은 결과를 예상하지만,

```
5
4
3
2
1
GO!
```

실제 결과는 아래와 같다.

```
-1
-1
-1
-1
-1
-1
```

원하는 결과를 얻으려면 코드를 아래와 같이 수정해야 한다.

```JavaScript
function countdown() {
  console.log("Countdown");
  for(let i = 5; i >= 0; i--) { // i를 for문 선언부에서 선언
    setTimeout(() => {
      console.log(i === 0 ? "GO!" : i);
    }, (5-i)*1000);
  }
  countdown();
}
```

디버깅해보면, 순서가 이렇다.

1. `console.log()`를 출력한다
2. for문을 돌면서, `i`가 `0`까지 반복되며(최종적으로 i는 0에서 -1 되어 -1이 된다 -반복은 더 이상 안되지만) `setTimeout()`을 실행한다.
3. 반복이 끝나면, 콜백 큐에 들어있던 함수들이 다시 콜스택으로 들어온다.
4. 첫번째 코드의 경우, 콜백함수가 `i = -1`을 참조한다.
5. 두번째 코드의 경우, 처음 들어온 콜백함수는 `i = 5`, 두번째 함수는 `i = 4` ... 식으로 참조한다. 첫번째 코드와는 다르게 i가 실행되었을 때의 값이 기억되고 있다

## 왜 그럴까

클로저

## 참고 자료

<https://medium.com/@js_tut/the-visual-guide-to-javascript-variable-definitions-scope-abfb86edad>
