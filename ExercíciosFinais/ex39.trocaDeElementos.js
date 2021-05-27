function trocaDeElementos(vetorA, vetorB) {
  if (vetorA.length == vetorB.length) {
    for (let i = 0; i < vetorA.length; i++) {
      vetorA[i] = vetorA[i] + vetorB[i]
      vetorB[i] = vetorA[i] - vetorB[i]
      vetorA[i] = vetorA[i] - vetorB[i]
    }
  }
  return [vetorA, vetorB];
}
console.log(trocaDeElementos([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));
