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

('use strict');

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

(function() {
  var appendDiv = document.getElementById('appendDiv'); // #1
  document.getElementById('wrapper').addEventListener('click', append);
  function append(e) {
    var target = e.target || e.srcElement || event.srcElement;
    var callbackFunction = callback[target.getAttribute('data-cb')];
    appendDiv.appendChild(callbackFunction());
  }
  var callback = {
    '1': (function() {
      var div = document.createElement('div'); // #2
      div.innerHTML = '1번';
      return function() {
        return div.cloneNode(true); // #3
      };
    })(),
    '2': (function() {
      var img = document.createElement('img');
      img.src = 'http://www.google.co.kr/images/srpr/logo3w.png';
      return function() {
        return img.cloneNode(true);
      };
    })(),
    delete: function() {
      appendDiv.innerHTML = '';
      return document.createTextNode('Cleared');
    },
  };
})();
