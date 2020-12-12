# 리액트 상태 관리

* 불필요한 렌더링이 일어나지 않는지 고민하기
* 백엔드와 적극적으로 이야기하기
* 서버의 기술에 대해 관심을 갖기
* **기본은 웹 개발자. 웹에 대한 전체적인 이해, 네트워크**
* 컴포넌트 내부에서만 사용하는 상태는 useState를 사용해서
* 함수 내부에 지역변수를 사용하는 것처럼. 전부 전역변수처럼 상위에 상태를 선언하지 말기
* 컴포넌트의 변화가 다른 컴포넌트의 변화에 영향을 미치면, 서로가 공유하는 상위 컴포넌트의 상태로 올리기
* Context API: props를 건너건너 받는 걸 하지 않고, 외부에서 관리하기 위해
* useContext를 사용하면 옵저버 패턴을 사용하는 것과 비슷함.
* 원리: 언제 렌더링이될까? -&gt; _구독하는 곳이 변경되면 렌더링이 된다_
* Provider를 여러가지 만들 수도 있다.
* 상태 변경 시 여러 데이터가 변경된다면 useReducer로 데이터를 묶음으로 관리

## 메세지 패싱 방식

1번

```javascript
this.model.setName("crong");
```

2번

```javascript
this.model.dispatch({
  action: "CHANEGE_NAME",
  payload: "crong"
})
```

2번에서는 View는 Model이 어떤 일이 하는지 모른다. 훨씬 더 느슨한 관계가 만들어짐. action 관리만 잘하면 됨.

* useReducer: 상태 관리 하는 부분을 분리한다. View와 Model을 분리.

## Flux Architecture

![Flux Architecture](https://facebook.github.io/flux/img/overview/flux-simple-f8-diagram-explained-1300w.png)

* 한 방향의 흐름을 유지하기
* View의 변화를 Action에 의해서 주기. Action을 Dispatch가 전달하고, Store가 변경된다.
* 사용자의 View 조작 말고도 외부에서 온 데이터도 Action에 의해서 데이터가 변경될 수 있다.

## Immutable

* 함수형 프로그래밍의 불변성을 먼저 공부해보기
* 리액트에서 상태 변경을 쉽게 파악하기 위해 권장하는 방식
* 어렵다!
* `Object.assign`, `concat`

