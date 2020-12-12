Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue || initialValue === 0 ? initialValue : this[0];
  let currentIndex = initialValue || initialValue === 0 ? 0 : 1;
  while (currentIndex < this.length) {
    const currentValue = this[currentIndex];
    accumulator = callback(accumulator, currentValue, currentIndex, this);
    currentIndex++;
  }
  return accumulator;
};

[1, 2, 3].myReduce((acc, cur, i, arr) => {
  console.log(acc, cur, i, arr);
  return (acc += cur);
}, 0);

[1, 2, 3].myReduce((acc, cur, i, arr) => {
  console.log(acc, cur, i, arr);
  return { ...acc, [i]: cur };
}, {});
