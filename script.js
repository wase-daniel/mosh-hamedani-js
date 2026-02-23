function multipleSwitch(num) {
  var answer = "";
  switch (num) {
    case "dan":
      answer = "wase";
      break;
    case 1:
      answer = "first";
      break;
    case "bob":
      answer = "marlon";
      break;
    case 90:
      answer = "ninety";
      break;
    case "do":
      answer = "mebi";
      break;
  }
  return answer;
}
console.log(multipleSwitch("bob"));
