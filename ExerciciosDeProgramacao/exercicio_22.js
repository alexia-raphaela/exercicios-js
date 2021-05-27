const numSorteado = (num) => {
    const min = 1
    const max = 10
    const resultado = Math.floor(Math.random() * (max - min + 1)) + min
    //console.log(resultado)
  if(resultado == num) {
    return `Parabéns! o número sorteado foi o ${resultado}`
  } else {
    return `Que pena! o número sorteado foi o ${resultado}`
  }
}
console.log(numSorteado(6))