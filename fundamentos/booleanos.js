let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3) // Estou verificando se o resultado da comparaçaõ é falso, !! RETORNÁRA A ORIGEM DELE, OU SEJA, VERDADEIRO
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('OS falsos...') /* Se eu fizer uma atribiução e o que tiver ao lado direito
da atribuição for falso, então retornára falso */ 
console.log(!!0) // Valor 0 resolve para falso
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = ''

console.log(nome || 'Desconhecido')