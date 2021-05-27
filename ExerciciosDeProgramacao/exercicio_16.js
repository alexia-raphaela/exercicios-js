 mostrarAnoBissexto = ano => {
    if((ano % 4 == 0 && ano % 100 != 0) || (ano % 100 == 0 && ano % 400 == 0)) {
        return true
    } else {
      return `${false}, pois é múltiplo de 100 e não é múltpilo de 400`
    }
 }  
 console.log(mostrarAnoBissexto(2100))