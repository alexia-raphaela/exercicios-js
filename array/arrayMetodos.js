const pilotos = ['Vettel', 'Alonso', 'Rainkkonen', 'Massa']
pilotos.pop()   // pop remove o útimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')   // push adiciona um novo elemento no final do array
console.log(pilotos)

pilotos.shift()   // remove o primeiro elemento array
console.log(pilotos)

pilotos.unshift('Hamilton')   // adiciona um novo elemento no inicio do array
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')   // 2: vou adicionar o indice 2, 0: não será removido nenhum elemento e irei adicionar Bottas e Massa
console.log(pilotos)

// remover a partir do método splice
pilotos.splice(3, 1)  // 3: indice 3, 1: irei remover um único elemento
console.log(pilotos)

// slice 
const algunsPilotos1 = pilotos.slice(2) // um novo array será gerado a partir desse método
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)  // irá remover elementos a partir do indice 1 ao 4, porém sem incluir o indice 4
console.log(algunsPilotos2)