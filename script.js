function checkingNum(num) {
  if (num > 0) {
    return "positive";
  }
  if (num < 0) {
    return "negative";
  }
  return "zero;";
}
console.log(checkingNum(2));
