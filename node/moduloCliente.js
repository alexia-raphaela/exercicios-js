// Importar 
// Ponto e barra, porque você está referencinado o módulo que está presente no seu sistema, usando um caminho relativo
// Quando eu tenho arquivos na mesma pasta atual que eu estou eu utilizo o caminho relativo para importar 
const moduloA = require('./moduloA.js') 
const moduloB = require('./moduloB.js')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA) // Mostrando o objeto inteiro

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)

// O momento que devo importar um arquivo, é quando, eu quero utilizar, pegar algo que está dentro de tal arquivo