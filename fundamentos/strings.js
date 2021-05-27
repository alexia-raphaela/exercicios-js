// String é uma cadeia de caracteres delimitada por aspas simples, duplas ou crase
const esecola = "Cod3r"

console.log(escola.charAt(4)) // É uma função que mostrará a posição de um caractere na string
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) 
console.log(escola.indexOf('3')) // Mostrando o dígito

console.log(escola.substring(1)) // Mostrando a partir do índice 1 até o final
console.log(escola.substring(0, 3)) // Nesta função mostrará o índice de 0 até 3, mas nao mostrará o terceiro caractere

console.log('Escola '.concat(escola).concat("!")) // Concatenado um literal a minha constante criada e a uma exclamação
console.log(escola.replace(3, 'e')) // Substituindo o número 3 pela letra e

console.log('Ana, Maria, Pedro'.split(',')) // Transformando uma string em um array, passando como parametro o que será usado como separador
