let numeros = [3, 9, 20, -50, -12, -6];
function numNegativo(numeros) {
  let soNegativo = [];
  for (let i = 0; i < numeros.length; i++){
    if (numeros[i] < 0) {
      soNegativo.push(numeros[i])
    }
  }
  return soNegativo
  
}
console.log(numNegativo(numeros))
