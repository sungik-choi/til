---
description: 2021년 1월 W3 (1/18 ~ 1/24)
---

# W3, 3/52 WEEK

### 배운 내용

#### 협업

* 리뷰 내용을 반영하고, 커밋 시 커밋 메세지에 누구의 리뷰를 반영했는지 작성해주면 좋다

#### lodash

* 배열의 값 체크는 `isEmpty()` 메서드를 사용하자. length 체크 외에 null 체크도 함께 해준다
* 문자열도 `isEmpty()` 메서드를 활용하자. `isLength('')` 도 false를 반환하기에 부정확하다

**React**

```text
const [visible, setVisible] = useState({})
​
const callbackRef = useCallback((key) => (node) => {
  if (!node) return
  const isVisible = calculateVisible(node)
  
  // 조건문을 걸어줘서, setState 함수가 이전 state와 다를 경우에만 실행되도록 한다.
  // 조건문이 없을 경우 setState => 재렌더링 => 다시 setState => 재렌더링... 무한 루프에 빠지게 된다.
  if (setVisible[key] !== isVisible) {
    setVisible({
      ...visible,
      [key]: isVisible,
    })
  }
}, [visible])
```

### 금주의 내 점수 : **80점**

### 잘한 점

* 주 3회 운동시간을 지켰다. 강도 높은 운동은 아니었지만 뭐라도 해보려고 했다는 점을 스스로에게 칭찬해주고 싶다
* 매일은 아니지만 독서도 주 3회 이상 했다
* 업무 시간에 의도적으로 50분 후 10분은 일어나 스트레칭하고, 휴식하려고 노력했다

### 개선할 점

* 컨디션 관리를 제대로 못해서, 목/금요일에 반강제적 재택근무를 하게 됐다. 수면시간을 칼같이 지켜야 다음날 활동에도 지장이 없다는 걸 늘 염두에 둬야겠다
* 마찬가지로 금요일 저녁부터 수면시간을 제대로 지키지 못했다. 금요일 밤 ~ 토요일은 모자란 수면을 채운다고 생각하면 괜찮았는데, 토요일 밤에 많은 양의 커피를 마시고 거의 밤을 새다시피 했다. 그에 따라 일요일 저녁에 수면 시간이 늦어지니, 월요일 시작부터 피곤해지는 악순환이 반복되는 거 같다. 주말에도 10시 전에 일어나도록 습관을 들여놓아야겠다
* 채널 유저챗에 참여를 거의 못했다. 지난주에 크게 데이고나서 + 업무에도 정신이 없으니 어떻게 해보겠다는 생각 자체가 안들었다. 다음주에는 하루에 1건이라도 꼭 유저챗을 해야겠다...

### 키워드

* typescript
* lodash
* git cli

### 공부거리 

* 타입스크립트. 군더더기없이 타입을 정의하고, 타입추론이 완벽하게 기능하도록 타입 작성하는 법은 뭘까?
* 테스트 코드. 안전하게 코드를 리팩토링하고 기능을 추가하려면 필수적인 거 같다. 어떻게 작성해야할까?
* Git 터미널로 쓰기. 명령어와 그 명령어가 어떤 일을 하는지 정확한 이해가 필요할 듯

### 읽은 것들

* [javascript - Typescript empty object for a typed variable - Stack Overflow](https://stackoverflow.com/questions/45339065/typescript-empty-object-for-a-typed-variable)
* [css - align-content와 align-items의 차이점은 무엇입니까 - by Dinh](https://lycaeum.dev/ko/questions/27539262)

