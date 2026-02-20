function elseIF(num) {
  if (num > 10) {
    return "number is greater than 10";
  } else if (num < 5) {
    return "number is less than 5";
  } else {
    return "between 10 and 5";
  }
}
console.log(elseIF(8));
