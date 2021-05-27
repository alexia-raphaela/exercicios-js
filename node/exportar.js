console.log(module.exports == this)
console.log(module.exports == exports)

// Esses atributos agora ficarão visíveis fora do arquivo
this.a = 1    
exports.b = 2   // O this e exports são duas referencias que aponta para o mesmo objeto que module.exports também aponta
module.exports.c = 3 

exports = null
console.log(module.exports) // Irá ser retornado apenas o que module.exports aponta

exports = {
    nome: 'Teste' // Dessa forma não é possível atribuir um novo objeto para ser exportado
}
console.log(module.exports)

// Forma correta de atribuir um novo objeto para ser exportado
module.exports = { publico: true }
