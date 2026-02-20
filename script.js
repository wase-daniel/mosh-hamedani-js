function checkNum(num) {
  if (num > 21 || num < 11) {
    return "outside";
  }
  return "inside";
}
console.log(checkNum(22));
