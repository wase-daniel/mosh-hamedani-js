const username = "";
const message = document.getElementById("welcome-msg");

message.textContent += username === "" ? " Guest" : username;
