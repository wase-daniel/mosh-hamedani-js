function switchStatement(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "first";
      break;
    case 2:
      answer = "second";
      break;
    case 3:
      answer = "third";
    case 4:
      answer = "fourth";
      break;
  }
  return answer;
}
console.log(switchStatement(3));
