function lookUp(val) {
  var general = "";
  var answer = {
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
  };
  general = answer[val];
  return general;
}
console.log(lookUp(1));
