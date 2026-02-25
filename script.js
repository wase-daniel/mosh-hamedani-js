function lookUp(val) {
  var general = "";
  var answer = {
    first: "monday",
    second: "tuesday",
    third: "wednesday",
    fourth: "thursday",
    firth: "friday",
  };
  general = answer[val];
  return general;
}
console.log(lookUp(second));
