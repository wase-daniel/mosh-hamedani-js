let theSumOf = (function () {
  return function theSumOf(number, value = 1) {
    return number + value;
  };
})();

console.log(theSumOf(23, 5));
