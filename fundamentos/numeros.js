const peso1 = 1.0
const peso2 = Number('2.0') // Atribuindo a constante peso2 uma função

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) /* Ultilizando função Nummber.isInteger 
para saber se um determinado valor número é inteiro*/
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // Diminuindo casas decimais
console.log(media.toString(2)) // Transformando valor numérico em uma string e em binário
console.log(typeof media)

