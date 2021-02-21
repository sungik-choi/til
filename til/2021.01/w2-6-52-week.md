---
description: 2021년 2월 W2 (2/8 ~ 2/14)
---

# W2, 6/52 WEEK

목요일부터 설날이었다. 사이드 프로젝트를 하고 독서를 많이 해야겠다는 계획을 세웠었는데, 취업하고 처음으로 제대로 가족들과 시간을 보내고 빈둥빈둥 놀다보니 금새 일요일이 돼버렸다... 그래도 좋은 연휴였다. 부모님과 간만에 이야기도 많이 나누면서 평생 몰랐던 이야기도 알게 됐다. 회사에서 보내준 설선물 한우를 가족들과 맛있게 먹었고, 부모님과 주식 이야기도 하고 네트워크 이야기도 하고\(아버지가 통신 업종 종사자시다\)... 재미있었다.

## 배운 내용 \(지난 주부터\)

* `useEffect` 의 원리에 관한 궁금증. 의존성 배열이 비어있을 때 cleanup 함수는 어떻게 동작할까?
  * 결론: `useEffect` 는 의존성 배열에 정의된 상태값들이 바뀔 때마다 실행되고, 마지막 상태를 기억하고 있다. 의도적으로 hooks 규칙을 무시해서 의존성 배열을 비웠을 경우, **이펙트 내부에서 사용한 상태는 컴포넌트가 마운트됐을 때와 동일하다.**
  * [참고](https://dev.to/robmarshall/how-to-use-componentwillunmount-with-functional-components-in-react-2a5g), [참고2](https://stackoverflow.com/questions/55020041/react-hooks-useeffect-cleanup-for-only-componentwillunmount)

```javascript
const Foo = ({ count }) => {
  // 이 경우, 부모 컴포넌트로부터 전달받은 count 값이 계속 유지되다가,
  // 컴포넌트가 언마운트될 때 console 값이 찍히게된다. 
  // 즉 ,count 값이 생애주기동안 변하더라도, 콘솔에 찍히는 값은 초기 마운트됐을 때 전달받은 값이다.
  useEffect(() => {
    return () => { console.log(count) }
  // hooks 규칙 무시
  }, [])

  /* return ... */
}
```

## 링크 모음

* [fe-news 2012-02](https://github.com/naver/fe-news/blob/master/issues/2021-02.md)
  * 깃헙 블로그에 관련된 포스팅이 있었는데 해당 글이 아주 좋았다
* [리덕스 잘 쓰고 계시나요? - 리디주식회사 RIDI Corporation](https://ridicorp.com/story/how-to-use-redux-in-ridi/)
  * 사이드 프로젝트에서 리덕스를 사용할 때 참고하면 좋겠다
* [Blogged Answers: Why React Context is Not a "State Management" Tool \(and Why It Doesn't Replace Redux\) · Mark's Dev Blog](https://blog.isquaredsoftware.com/2021/01/context-redux-differences/)
  * 왜 React Context API와 Redux가 다른지에 대한 좋은 글
* [웹소켓을 활용한 라벨 프린터 로컬라이징 적용하기](http://labs.brandi.co.kr//2021/02/01/janghj.html)

### 금주의 내 점수 : 50점

### 잘한 점

* 수면/기상 시간을 **평일**에 일정하게 가져갔다.

### 개선할 점

* **여전히 부족한 독서**. 내가 내린 결론은 **침대에 누워서 읽지 말자**이다. 가벼운 문학/비문학이면 그래도 괜찮았겠지만, 그에 비해선 지루하고 어려운 내용들을 읽게 되므로 침대에서 읽기가 쉽지 않다. 매일 피곤해서 뻗어버렸기에 계속해서 실패했다. HTTP 완벽 가이드같은 어렵고 두꺼운 책은 무조건 책상에서 읽고, 침대에선 자거나, 가벼운 책들만 읽기로
* **주말에는 지켜지지 않는 기상/수면시간과 시간 낭비**. 금요일 저녁을 주의하자. 평일과 완전히 수면루틴이 동일할 수는 없으나 새벽 4시 ~ 12시 기상 이런 식으로 완전히 망가지면 안된다. 기상/수면시간과 식사 시간만 일정하게 지켜져도 나머지 시간 낭비 시간은 자연스럽게 줄어들 거 같다. 이번 주 금요일 저녁엔 꼭 지키기
* **가볍게라도 운동하기**

### 키워드

* 생략

### 공부거리

* `useEffect` 구현 방식, 클로저가 어떤 식으로 사용됐는지
* `네트워크` 가 요즘 흥미롭다

