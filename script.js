function greaterThan(num) {
  if (num > 100) {
    return "over 100";
  }
  if (num > 10) {
    return "over 10";
  }
  return "10 or lessthan";
}
console.log(greaterThan(10000));
