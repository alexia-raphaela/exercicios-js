// A função setTimout executará uma função depois de um determinado tempo
/*setTimeout(function() {
    console.log('Executando callback...')
    
    setTimeout(function() {
      console.log('Executando callback...')
      
      setTimeout(function() {
        console.log('Executando callback...')

      }, 2000)
    }, 2000)
}, 2000) */

// Usando promise
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
          console.log('Executando promise...')
            resolve() // Uma vez chamando o resolve, o then será chamado
        }, tempo)
    })
}
// Executando o resolve depois de três segundos
//esperarPor(3000).then(texto => console.log(texto))
esperarPor()  // Irá assumir o valor padrão
    .then(() => esperarPor())
    .then(esperarPor) 