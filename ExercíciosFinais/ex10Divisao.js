function seDivisivel (dividendo) {
    if (dividendo % 3 == 0) {             // se restar 0 então é divisível
      return true

    } else {
      return false
    }

}
console.log(seDivisivel(10))