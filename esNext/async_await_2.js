function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max ) [max, min] = [min, max] // Ivertendo o valor das variaveis
    return new Promise((resolve, reject) => {
      const fator = max - min + 1
      const aleatorio = parseInt(Math.random() * fator) + min
      if(numerosProibidos.includes(aleatorio)) {
          reject('Número repetido!')
      } else {
          resolve(aleatorio)
      }
      resolve(aleatorio)
  })
}
//  Uma forma de percorrer um array com uma qauntidade de elementos que eu quero
async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try {
      const numeros = []
      for(let _ of Array(qtdeNumeros).fill()) {
        // o await vai ficar junto a função que irá gerar uma promise
         numeros.push(await gerarNumerosEntre(1, 60, numeros))
      }
      // Quando você retorna um valor, você resolve a promise 
      // a forma que você tem para resolver uma promise dentro de uma função asincrona é retornando o valor
      return numeros
      // Quando você lança uma exeção, você está rejeitando a promise
    } catch(e) {
        // a forma que você tem para rejeitar uma promise dentro de uma função assincrona é gerando uma exceção
        if(tentativas > 10) {
          throw "Não deu certo!"
        } else {
          return gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
        
    }
}

gerarMegaSena(15)
  .then(console.log)
  .catch(console.log)
