
function calcularaumento (salario, plano) {
    switch (plano) {
        case 'A':
          return salario + (salario * 0.10)   
          break
        case 'B':
          return salario + (salario * 0.15)
          break
        case 'C':
          return salario + (salario * 0.20)
          break
        default:
          return 'Este plano é inválido'

    }


}
console.log(calcularaumento(1100, 'D'))