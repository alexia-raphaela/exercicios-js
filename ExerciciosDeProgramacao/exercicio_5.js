maiorOuIgual = (numero1, numero2) => {
    if(numero1 >= numero2) {
      return `true ${numero1}, ${numero2}`
    } else {
      return `false ${numero1}, ${numero2}`
    }
}
console.log(maiorOuIgual(5, 3))