logicaInclusiva = (numero, minimo, maximo, inclusivo) => {
    if(inclusivo == true){
      if(numero > minimo && numero < maximo) {
        return `número ${numero}, mínimo ${minimo}, máximo ${maximo}, ${inclusivo}`
      }
    } else {
      return `Lógica exclusiva, false`
    }
    
}
console.log(logicaInclusiva(3, 2, 10, false))