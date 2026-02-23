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
      break;
    case 4:
      answer = "fourth";
      break;

    default:
      answer = "invalid";
      break;
  }
  return answer;
}
console.log(switchStatement(5));
