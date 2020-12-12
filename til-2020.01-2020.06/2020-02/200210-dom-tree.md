# 2월 10일 \(월\)

## 오늘 배운 것

* DOM 공부 하기

## 수업

> 문서 객체 모델\(The Document Object Model, 이하 DOM\) 은 HTML, XML 문서의 프로그래밍 interface 이다. DOM은 문서의 구조화된 표현\(structured representation\)을 제공하며 프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공하여 그들이 문서 구조, 스타일, 내용 등을 변경할 수 있게 돕는다. DOM 은 구조화된 nodes와 property 와 method 를 갖고 있는 objects로 문서를 표현한다. 이들은 웹 페이지를 스크립트 또는 프로그래밍 언어들에서 사용될 수 있게 연결시켜주는 역할을 담당한다.

### DOM Tree

* 트리 자료구조를 더 공부해보기. 연결돼있는 개념이다
* `node-list` 는 가짜배열이다. `array-like type` 이라고 한다.
* `Array.from(타겟)` 메서드로 진짜 배열로 변경할 수 있다.
* `toString.call(타겟)` : 타입체크 자세히 하고 싶을 때 사용
* DOM 작업을 할 때 $$ 이름을 가진 함수처럼, 자기만의 쿼리 셀렉터 커스텀 함수를 만들어서 사용하면 좋음
* DOM API 공부
* DOM 은 굉장히 복잡하므로 DOM 제어를 최소화하는게 속도를 빠르게 한다. -&gt; 현대의 API들은 DOM 조작을 사용자에게 맡기지 않는다.
* 노드를 찾을 때 보통 document 부터 검색하는 경우는 잘 없다. 기준점을 하나 잡고 찾고는 한다.
* `firstElementChild`

