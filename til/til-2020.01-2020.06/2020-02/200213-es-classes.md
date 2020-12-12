# 2월 13일 \(목\)

## 오늘 배운 것

* Carousel UI 작업
* Class, CSS, 잘못 PR 날려서 개고생
* 깃 공부 해야겠다...
* 소스트리 체리픽 공부하기

```text
git cherry-pick 18b488d93f2b20df94ff95b26ab1a8c86e6a0ceb
git cherry-pick 8825fcb4887b0e22151039706e117b23a7f1fced
git cherry-pick 0181f2b4033b01e1f1f0133e46d0465387a15ae7
git cherry-pick 8cdb9a3c341b71b00abd1182eeed90c8b1013b1b
git cherry-pick ec9e9e4e3dc602b28e4384648de399b7d64c413f
git cherry-pick 1091e4d2ddd28a28ae5dca8ed82ecd414b380ddd
git cherry-pick 9d5f9d1d751209b3184b2415b2508d2ca0cffd81
git cherry-pick cac92f0e1b2ecc09d5c20555107447642e3565b3
git cherry-pick 539cd2b3bbc8b57a6f1bc6f4efd825952b916d97
git cherry-pick 100bdee9bdb30b6ecd0814117841ecf57ab70c74
git cherry-pick 947a039595bab50f60d3a9d9fddb7f3cc05d1e19
git cherry-pick 057d6393c4584702eb73d3e28e649b78bc9cb84e
```

## 수업

### 커리큘럼

* 미션의 키워드가 중요하다
* 따로 깊이 있게 공부하는 부분도 필요하다
* 자바스크립트는 다 깊어야된다

### OOP

* `리팩토링` : 내 코드에 중복이 보일 때
* **변경을 예상하면서 코드를 작성하기**
* 객체를 나눠 책임을 분리해보면서, 장단점 같은 걸 느껴보기
* 객체 하나는 자율적으로
* 결합도를 낮추기 위해 다른 객체를 객체 안에서 하드코딩 하지 말고, 생성자의 인자로 넘겨주기
* 함수가 일급객체인 점을 잘 활용하면 느슨한 결합을 만들 수 있다

```javascript
function a (func) {
  return func; // b(); 로 넣는게 아니라 함수를 인자로 넣는다.
}

function b() {...}

a(b); // === function a() { b(); }
```

> 미션을 빨리 해치우려고 하지 말고 디자인을 경험하기

* 종이 위에 먼저 객체를 디자인 해보기
* `prototype`, `this`, `bind`, `call`, `apply`
* 메서드 작게 나누기

### Animation

* `Browser rendering pipeline` 의 이해
* 개발자도구 debugger 활용
* `request animation frame`
* `Canvas` 더 알아보기
* 바닐라에서 인터랙션 코딩을 많이 해보기. raf/transition
* 버거 메뉴가 X로 바뀌는 인터랙션
* `3D`, `WebGL`, `컴퓨터 그래픽스` -&gt; 전망이 좋다

### 코드리뷰

* 콜백함수는 분리하기
* 인자는 객체로 받는 게 좋음. **객체는 순서를 신경쓰지 않는다**
* 비슷한 함수들은 일관성을 유지하게. -&gt; 인자 순서를 같이

