function prograAritmetica(numTermo, primTermo, razao) {
  let resultado = (numTermo - primTermo) * razao + primTermo
  return resultado
}
//console.log(prograAritmetica(20, 1, 2));

function prograGeometrica (numTermo, primTermo, razao) {
  let termoAtual = 0;
  for (let i = 0; i < numTermo; i++){
    termoAtual = primTermo * Math.pow(razao, i);
  }
  return termoAtual
}
//console.log(prograGeometrica(25, 1, 2))

function somaProgrecoes (numTermo, primTermo, razao) {
    let funcao1 = prograAritmetica(numTermo, primTermo, razao);
    console.log(prograAritmetica(20, 1, 2));
   
    let funcao2 = prograGeometrica(numTermo, primTermo, razao);
    console.log(prograGeometrica(25, 1, 2));
    
    return funcao1 + funcao2
}
console.log(somaProgrecoes(25, 1, 2))