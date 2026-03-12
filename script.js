let theSumOf = (function () {
  return function theSumOf(number, value = 1) {
    return number + value;
  };
})();

console.log(theSumOf(23, 5));
console.log(theSumOf(5, 1));
