function multiplicacao(vetorNum, numInteiro) {
  let resultado = [];

  for (let i = 0; i < vetorNum.length; i++) {
    resultado.push(vetorNum[i] * numInteiro);
  }
  return resultado;
}

function segundaMult(vetorNum, numInteiro) {
  let contas = multiplicacao(vetorNum, numInteiro);
  let resultado = [];

  for (let i = 0; i <= contas.length; i++) {
    if (contas[i] > 5) {
      resultado.push(vetorNum[i] * numInteiro);
    }
  }
  return resultado
}
console.log(segundaMult([3, 8, 1, 9, 10], 3));
