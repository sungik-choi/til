function delayPromise(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().toISOString());
    }, sec * 1000);
  });
}

async function myAsync() {
  const time = await delayPromise(3).then(() => {
    return "x";
  });
  console.log(time);
  return "async";
}

// async는 Promise를 리턴한다.
// console.log(myAsync());

myAsync().then(result => {
  console.log(result);
});
