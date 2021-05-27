function calcularAnoBissexto (ano) {
    if (ano % 4 == 0 || ano % 400 == 0) {
      return `true, ${ano} é ano bissexto`
      
    } else {
      return `${false}, este ano não é ano bissexto`
    }

}
console.log(calcularAnoBissexto(2015))