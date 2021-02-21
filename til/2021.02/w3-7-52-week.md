---
description: 2021년 2월 W3 (2/15 ~ 2/21)
---

# W3, 7/52 WEEK

## 배운 내용

### styled-component

#### `forwardedAs` prop

다른 컴포넌트를 `styled()` 고차함수로 랩핑해서 사용ㅇ할 경우, `as` prop 대신 `forwardedAs` 를 사용해야 제대로 동작한다.
외부 모듈(디자인 시스템)의 `Text` 컴포넌트 등을 `div` 로 사용해야하거나 하는 경우가 있어서 알게 된 방식.

#### `&&&`

`!important` 를 사용하지 않고, 스타일 우선순위를 강력하게 만들어 충돌하는 기존 스타일 위에 오버라이딩할때 사용할 수 있다.
클래스명을 3번 이어붙인 것과 동일하다.

```javascript
const Foo = styled.div`
  &&& {
    background-color: red;
  }
`
```

### Typescript

#### `const` assertion

타입스크립트에서 `const` 로 변수를 선언하면, 더 강력한 타입으로 추론해준다.

```typescript
let hello = "hello"; // let hello: string
const hello = "hello"; // const hello: "hello"
```

당연한 듯 보이지만, 객체 변수가 `const` 로 선언됐을 땐 또 다르다. 객체의 내부의 속성은 `let` 을 사용했을 때와 같이 추론되기 때문.
`as const` 를 사용해서 해당 값이 그대로 타입으로 적용되도록 할 수 있다.

```typescript
const obj = {
    a: 'abc' as const,
    b: 'abc'
};

obj.a = 'def'; // 에러가 발생한다. Type '"def"' is not assignable to type '"abc"'
obj.b = 'def';
```

#### 배열 요소의 타입

```typescript
const foo = [1, '2', 3]

// Type: (string | number)[]
type Foo1 = typeof foo 

// [number]를 통해 인덱싱이 가능하다
// Type: string | number
type Foo2 = typeof foo[number] 

// Type: readonly [1, '2', 3]
const bar = [1, '2', 3] as const 

// const assertion으로 자세한 타입지정이 되었다면 이런식으로도 활용 가능
// Type: 1 | '2' | 3
type Bar = typeof bar[number]

// 필요할 경우 이렇게 세밀하게 타입 설정이 가능
// Type ("1-bar" | "2-bar" | "3-bar")[]
const foobar = bar.map((elem) => {
  return `${elem}-bar` as const
})
```

## 링크 모음

- [styled-components: FAQs (스타일 override)](https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity)

## 회고

### 금주의 내 점수: 70점

### 잘한 점

- 업무 시간에 집중했다.

### 개선할 점

- 업무 시간을 길게 가져가는 것도 좋은데, 필요 이상의 야근을 하게 되면 다음날, 그 다음날 일정 소화에 무리가 오게 되는 거 같다. 운동과 독서도 자연스레 소홀해지게 되고. 오늘 잘하는 것 못지 않게 **내일 잘하는 것**도 중요하기 때문에, 몸에 무리가 가지 않는 선에서 생활 리듬을 지키는 게 좋을 거 같다.
- 주말에 또 놀았다! 금요일 저녁만 되면 한 주 시작에 했던 다짐이 왜 사라져버리는지... 뭔가 강제적으로 붙들어놓을만한게 필요하다. 휴식도 좋은데, 적어도 3시간 정도는 집중해서 공부할 시간이 필요.
- 저번주에도 회고했지만 금요일 저녁부터 주말에 수면시간을 지키는게 정말 쉽지 않다. 애초에 야행성 인간이라 그런가. 새벽 2시정도까지는 여유를 두는 편이 좋겠다.
- 기록을 더 꼼꼼히 해야겠다. 도움되는 링크 저장이나, 배운 내용들을 그때 그때 메모해두는게 더 필요할 듯.
