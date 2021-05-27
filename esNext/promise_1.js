// Promise, traduzindo é uma promessa, ou seja, é algo que se fará no futuro
let a = 1
console.log(a)

const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

// Uma promessa que irá te dar um dado no futuro
// A promessa irá gerar um unico valor
new Promise(function(resolve) {
  resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
// Processamento Sincrono
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    // .then(v => console.log(v))
    .then(console.log)
 