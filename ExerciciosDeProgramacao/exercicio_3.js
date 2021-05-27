calcularSalario = (horasTrabalhadas, valorPorHora) => {
  let calcularTotal = horasTrabalhadas * valorPorHora
  return `Salário igual a R$ ${parseFloat(calcularTotal).toFixed(2).replace('.', ',')}`
}

console.log(calcularSalario(160, 40))