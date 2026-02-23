function ariaChallenge(val) {
  var color = "";
  switch (val) {
    case "umutuku":
      color = "red";
      break;
    case "ubururu":
      color = "blue";
      break;
    case "icyatsi":
      color = "green";
      break;
    default:
      color = "ntabwo nzi iryo bara";
  }
  return color;
}
console.log(ariaChallenge("umutuku"));
