function notaAluno(codigoAluno, maiorNota, nota1, nota2) {
  let mediaCalcula = (maiorNota * 4) + (nota1 * 3) + (nota2 * 3)
  let mediaPonderada = mediaCalcula / (4 + 3 + 3 ) 
  if(mediaPonderada >= 5){
    console.log(`Aprovado, ${codigoAluno}, ${maiorNota}, ${nota1}, ${nota2}, total das notas ${mediaPonderada}`)
  }
  if(mediaPonderada < 5) {
    console.log(`Reprovado, ${codigoAluno}, ${maiorNota}, ${nota1}, ${nota2}, total das notas ${mediaPonderada}`)
  }
}
console.log(notaAluno(23456, 2.8, 6, 8))