// Conceito de hoisting, é um issamento, joga para cima variaveis definidas com var
console.log('a =', a)
var a = 2 /* Mesmo a variavel sendo declarada depois de feito o console.log 
Ela é issada, é jogada para cima e assim é impressa pelo console.log*/
console.log('a =', a)

console.log('b =', b)
let b = 2
console.log('b =', b)