// você instanciou Map a partir de new
const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

//console.log(tecnologias.react)
// forma correta de acessar chave e valor de tecnologias
console.log(tecnologias.get('react').framework)

// Criando um map a partir de uma matriz, fazendo varios arrays, contendo dois elementos, chave e valor
const chavesVariadas = new Map([
  // Matriz
  [function () { }, 'função'], // chave função
  [{}, 'objeto'], // chave objeto vazio 
  [123, 'Número'],  // chave conjunto de numeros
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

// verficando a partir da função has, se o elemento está ou não contido dentro desse Map
console.log(chavesVariadas.has(123))

// é possivel excluir elementos de dentro de um Map a partir da função delete
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
// verificando quantos elementos estão presentes dentro do Map a partir de size
console.log(chavesVariadas.size)

// as chaves não aceita repetição diferente, já os valores podem ser repetidos
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') // chave não aceita repetição então é substituida
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)