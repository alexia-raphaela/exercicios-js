function rand([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min] // Com o destructuring também é possível inverter variáveis
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)

}

console.log(rand([50, 40 ]))
console.log(rand([992]))
console.log(rand([ , 10]))
console.log(rand([]))
console.log(rand()) // Tentar desetruturar elemento de algo que é null ou undefined ERRO!