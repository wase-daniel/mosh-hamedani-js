const button = document.getElementById("prankBtn");

button.addEventListener("mouseover", () => {
  // This moves the button to a random spot on the screen
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
});
