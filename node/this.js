// o this dentro de um módulo aponta para module.exports
console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

// O this dentro de uma função aponta para global
function logThis() { // Acessando o this dentro de uma função que está dentro do módulo
  console.log('Dentro de uma função...')
  console.log(this === exports) // dentro de uma função o this não aponta para exports
  console.log(this === module.exports)
  console.log(this === global)
}
logThis()