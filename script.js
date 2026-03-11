function randomNumber(minNbr, maxNbr) {
  return Math.floor(Math.random() * (maxNbr - minNbr + 1)) + minNbr;
}

console.log(randomNumber(10, 5));

const username = "";
const message = document.getElementById("welcome-msg");

message.textContent += username === "" ? " Guest" : username;
