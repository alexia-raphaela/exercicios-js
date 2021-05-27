function resolverOperacao (numero1, operador, numero2) {
    switch (operador) { 
      case '+':
        return numero1 + numero2
        break
      case '-':
        return numero1 - numero2
        break
      case '/':
        return numero1 / numero2
        break
      case '*':
        return numero1 * numero2
        break
      default:
        return 'Esta operação é inválida'
                
    }

}
console.log(resolverOperacao(5, '%', 10))