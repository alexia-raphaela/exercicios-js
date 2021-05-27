const valores  = [7.7, 8.9, 6.3, 9.2] // Array declarado de forma literal
console.log(valores[0], valores[3]) // Acessando índice
console.log(valores[4])

valores[4] = 10 // Adciona um elemento no array
console.log(valores)
console.log(valores.length) // Tamanho do meu array

valores.push({id: 3}, false, null, 'teste') /* Adiciona nossos elmentos no array 
O array é diferente de outras linguagens, ele é héterogenio, ou seja, ele aceita mutiplos valores
*/
console.log(valores) // JavaScript por ser uma linguagem de tipagem fraca, pode misturar valores em um array

console.log(valores.pop()) // Esta função retira o último elemento do array 
delete valores[0] // Assim como o pop esta função também retira um elemento do array, neste caso ele retirára o primeiro elemento 
console.log(valores)

console.log(typeof valores) // Em Java Script um array é do tipo objectjs