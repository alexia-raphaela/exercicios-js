function gerarNumerosEntre(min, max, tempo) {
  // Ivertendo o valor das variaveis
    if (min > max ) [max, min] = [min, max]
    return new Promise(resolve => {
      setTimeout(function(){
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
      }, tempo)
    })
}

// Gerar varios numeros aleatorios de uma vez 
function gerarVariosNumeros() {
    return Promise.all([ // Valores a serem gerados 
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500),
      // Uma vez que todos esses numeros tenham sido resolvidos, somente depois chamará o then
    ])
}

// Mostrar tempo de execução da promise
console.time('promise')

gerarVariosNumeros()
  .then(console.log)
  .then(() => {
      console.timeEnd('promise')
  })