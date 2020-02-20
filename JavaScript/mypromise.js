class MyPromise {
  constructor(fn) {
    fn(this.resolve, this.reject);
  }

  // 콜백함수를 받아서, 프라미스를 반환한다
  then(callback) {
    return new MyPromise(callback);
  }

  resolve(data) {
    return this.then(data);
  }

  reject() {}
}

function delay(sec) {
  return new MyPromise((resolve, reject) => {
    setTimeout(resolve, sec);
  });
}

const delayMillisecond = 1000;
delay(delayMillisecond)
  .then(data => {
    console.log("data : ", data);
    return delayMillisecond / 1000;
  })
  .then(second => console.log(`${second}초가 지났습니다.`));
