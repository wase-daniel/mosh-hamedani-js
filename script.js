function numberBetween(minNbr, maxNbr) {
  return Math.floor(Math.random() * (maxNbr - minNbr + 1)) + minNbr;
}

console.log(numberBetween(5, 15));
