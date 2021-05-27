// Objetct.preventExtensions, irá prevenir não permitirá que o seu objeto seja extendido, ou seja, não permitira que sejam adcicionados novos atributos no seu objeto
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha' // É possível alterar e excluir o valor do atributo, mas não adcionar um novo atributo no Object.preventExtensions
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa) // Estou selando o objeto pessoa, ou seja, .seal não permite que os atributos do objeto seja excluidos e adicionados novos, é permitido apenas que o atributo seja alterado
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes

