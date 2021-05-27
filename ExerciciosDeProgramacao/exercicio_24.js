const mostrarLetrasRepetidas = (caractere, frase) => {
  const letras = frase.split('')
  let count = 0
  for(let i = 0; i < letras.length; i++){
    if(letras[i] == caractere){
      if(caractere == caractere.toLowerCase()){
        count++
      }
    }
  }
  return count

}
console.log(mostrarLetrasRepetidas('e', 'esse é o exercicio'))