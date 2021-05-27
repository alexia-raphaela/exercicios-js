mostrarValorInvertido = (boolean) => {
  if(boolean == true) {
    return false
  }
  if(boolean == false) {
    return true
  } 
  if(typeof(boolean) != Boolean) {
    return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof(boolean)}`
  }
}
console.log(mostrarValorInvertido(true))


mostrarNumeroInvertido = (numero) => {
    if(numero > 0) {
      return numero < 0 ? numero : -numero
    } 
    if(numero < 0){
      return numero < 0 ? -numero : numero 
    }
    if(typeof(numero) != Number) {
      return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof(numero)}`
    } 
}
console.log(mostrarNumeroInvertido(5))