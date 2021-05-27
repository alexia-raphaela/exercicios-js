let num1 = 1
let num2 = 2

num1++ // Pós fixada 
console.log(num1)
--num1 // Pré fixada
console.log(num1)

console.log(++num1 === num2--) // Será verdadeiro porque num1 neste caso será resolvido como true primeiro, por ser préfixado
