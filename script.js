var myGlobal = 10;

function fun1() {
  oopsGlabal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlabal: " + myGlobal;
  }
  if (typeof myGlobal != "undefined") {
    output += " oopsGlabal: " + oopsGlabal;
  }
  console.log(output);
}
fun1();
fun2();
