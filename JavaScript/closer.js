/* eslint-disable*/

function setClick() {
  for (let i = 0; i < 3; i++) {
    btns[i].onclick = function() {
      console.info(i);
    };
  }
}

// Babel
// let 이 없던 시절에 var 로는 이 문제를 어떻게 해결했을까?

("use strict");

function setClick() {
  var _loop = function _loop(i) {
    btns[i].onclick = function() {
      console.info(i);
    };
  };

  // 새로운 스코프를 만들어 값을 주입해준다.
  for (var i = 0; i < 3; i++) {
    _loop(i);
  }
}
