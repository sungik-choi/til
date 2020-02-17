# 비동기 프로그래밍

[YouTube: What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ&feature=youtu.be)

## 자바스크립트는 싱글 스레드 언어

자바스크립트는 1개의 스레드로 동작한다. 즉, 1개의 `Call Stack`을 가지고 있다. 스택이 1개만 있기 때문에, 1번에 1개의 작업만 실행할 수 있다. 이러한 특성때문에, 실행 시간이 오래 걸리는 작업이 있다면 다음 작업의 실행이 지연되는 `blocking`이 발생할 수 있다.

자바스크립트에서는 이를 비동기 처리로 해결할 수 있다. 이는 음식점에서, 줄을 서서 기다리지 않도록 전화번호를 받아서 자리가 나면 전화를 해주는 상황과 비슷하다.

1. 인터프리터가 비동기 함수를 만나면, 즉시 `Call Stack`에서 지워버린다.
2. 이 비동기 함수는 `Web API`로 넘어간다.
3. 비동기 함수는 `Web API`에 담겨있다가, 타이머나 로드 등이 완료되면 `Callback Queue`로 보내진다.
4. `Event Loop`는 `Call Stack`과 `Callback Queue` 사이에서 `Call Stack`이 비어있는지 주시한다.
5. 모든 함수의 실행이 완료되고 `Call Stack`이 비워지면, `Event Loop`는 `Callback Queue`에 담겨있는 함수들을 먼저 들어온 순서대로 `Call Stack`으로 넘겨준다.

## Call Stack (호출 스택)

> 호출 스택은 여러 함수들(functions)을 호출하는 스크립트에서 해당 위치를 추적하는 인터프리터 (웹 브라우저의 자바스크립트 인터프리터같은)를 위한 메커니즘입니다. 현재 어떤 함수가 동작하고있는 지, 그 함수 내에서 어떤 함수가 동작하는 지, 다음에 어떤 함수가 호출되어야하는 지 등을 제어합니다. [MDN](https://developer.mozilla.org/ko/docs/Glossary/Call_stack)

1. 자바스크립트가 함수를 호출하면 인터프리터는 이를 호출 스택에 추가한 다음 함수를 실행합니다.
2. 해당 함수에 의해 호출되는 모든 함수는 호출 스택에 추가되고 호출이 도달하는 위치에서 실행합니다.
3. 메인 함수가 끝나면 인터프리터는 스택을 제거하고 메인 코드 목록에서 중단된 실행을 다시 시작합니다.
4. 스택이 할당된 공간보다 많은 공간을 차지하면 `stack overflow` 에러가 발생합니다.

## Callback Queue

## Event Loop

## Web API
