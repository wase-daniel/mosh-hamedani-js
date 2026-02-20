let width = 0;
const progressBar = document.getElementById("myBar");

function startLoading() {
  setInterval(() => {
    if (width < 99) {
      // It stops at 99% and never hits 100!
      width++;
      progressBar.style.width = width + "%";
    }
  }, 100); // Moves every 0.1 seconds
}
