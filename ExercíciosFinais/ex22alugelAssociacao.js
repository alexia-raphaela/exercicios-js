function pagarAnuidadeAssociacao (mes, valor) {
  
  return `No mês de ${mes}, o valor a ser pago com 5% de juros será de R$ ${(valor * 0.5) / 10 + valor},00`
}
console.log(pagarAnuidadeAssociacao('janeiro', 500))