// Map é uma função de array, seu objetivo é mapear um array para o outro, ou seja, o map irá gerar um novo array com o mesmo tamanho do original, mas com os elementos transformados, diferentes 
const nums = [1, 2, 3, 4, 5]

// O map tem um for por trás, então podemos dizer também que o map é um for com propósito
// Map recebe três parametros, valor atual, indice e o array complet
let resultado = nums.map(function(e) {
    return e * 2
})
console.log(resultado)

// Um map sucessivamente

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)