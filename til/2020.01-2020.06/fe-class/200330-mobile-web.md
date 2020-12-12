# 모바일 웹 개발

## 키워드

* dpi, ppi, viewport
* visibility vs display 성능 차이
* 미세먼지 예보 영상: display를 block/none 으로 처리하기?
* 스크롤바 위치에 따라서 해당 타임라인의 이미지를 보여주기
* **타이밍 맞추는 게 중요하다**

## 우선순위

1. 모바일 터치 이벤트에 대한 이해
2. 애니메이션의 처리, 비동기에 대한 이해
3. 미디어 쿼리, CSS 영역, 모바일 디버깅

## 실습

### 강아지 이동시키기

```javascript
document.querySelector(".controller").addEventListener("touchend", evt => {
  const dog = document.querySelector(".gage button");
  const offset = 40;
  const interval = 300;
  const moveLeft = () => {
    const currentLeft = parseInt(dog.style.left);
    dog.style.left = `${currentLeft + offset}px`;
    setTimeout(moveLeft, interval);
  };
  moveLeft();
});
```

