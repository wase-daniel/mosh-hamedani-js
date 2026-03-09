function returNRandomNbr(minNbr, maxNbr) {
  return Math.floor(Math.random() * (maxNbr - minNbr + 1)) + minNbr;
}
console.log(returNRandomNbr(10, 20));
