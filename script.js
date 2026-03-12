let numberCap = (function () {
  return function numberCap(number, value = 1) {
    return number + value;
  };
})();
console.log(numberCap(12, 5));
console.log(numberCap(120));
console.log(numberCap(1224444));
