// Promise é usado quando você quer ter algum tipo de processamento assincrono
// Processamento assincrono permite que um proximo processo inicia mesmo que o anterior não tenha sido terminado
// Uma promise é atendida ou resolvida e também pode ser rejeitada
// E a melhor forma de acessar esse arquivo é por meio de uma callback 
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
      // quando a promise for retornada e atendida, ele vai chamar a função resolve
      // essa operação mais demorada termina você chama o resolve e o resolve chama a função then
        setTimeout(() => {
          resolve(frase)  // resolve aceita apenas um unico paramtero
        }, segundos * 1000)
    })
}
// pegar de fato a frase
falarDepoisDe(3, 'Que legal!')
// acessar o resultado de uma promessa
// encadiamento de operações em cima daquilo que você recebe como resposta de uma promise
  .then(frase => frase.concat('?!?'))
  // a promise tem essa função then, essa função é chamada quando a promise é resolvida
  .then(outraFrase => console.log(outraFrase))
  .catch(e => console.log(e)) // para tratar um erro em uma promise
