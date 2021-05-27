let inteiros = [155, 15, 3, 9, 10, 2021, 0, 2];
function numeroMin(inteiros) {
  return Math.min.apply(0, inteiros)
}
function numeroMax(inteiros) {
  return Math.max(...inteiros)
}
console.log(numeroMin(inteiros));
console.log(numeroMax(inteiros));
