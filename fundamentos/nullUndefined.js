let valor  // não inicializada. Conceito Undefined
console.log(valor) 

valor = null /* significa que esta variavel não tem nenhum valor atribuido
como um valor primitivo 3, boolean e não tem um
endereço que aponta para um local de memória
ou seja, ausência de valor */
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)