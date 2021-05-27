// O array em javaScript é um objeto, porém em vez de ele organizar seus atributos a partir de chaves, ele organiza seus dados a partir de indices, comçando pelo indice 0
console.log(typeof Array, typeof new Array, typeof [])  // tipo do array, tipo do array instanciado, tipo do array literal
// Array é uma estrutura dinamica, diminui e aumenta dinamicamente, o array é uma estrutura heterogenia
// Não é indicado trabalhar com dados heterogenios pois é muita informação, e sim trabalhar com dados homogenios, ou seja, todos do mesmo tipo

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'  // Esta é uma forma válida de adcionar um novo elemento em um array, poré é uma forma mais utilizada para subtituir um valor no elemento do array
aprovados.push('Abia')    // Essa é a forma mais comum e utilizada para adicionar um novo elemento
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()   // Sort irá ordenar o array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1)    // Splice serve para adicionar novos elementos, também remove elementos ou também remover e adicionar elemnetos ao mesmo tempo
// O primeiro parametro é o indice e o segundo parametro é a quantidade de elementos que você quer excluir a partir daquele indice
console.log(aprovados)
