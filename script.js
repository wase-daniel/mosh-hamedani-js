let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  let combinerBoth = count + " - ";
  // 3. Render the variable in the saveEl using innerText
  saveEl.innerText += combinerBoth;
}
// NB: Make sure to not delete the existing
console.log(count);
