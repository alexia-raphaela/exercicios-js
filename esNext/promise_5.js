function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
          //con.log('temp')
          if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
      } catch(e) {
          reject(e)
      }
    })
}

funcionarOuNao('Testando...', 0.5)
  .then( v => `Valor: ${v}`)
  .then(
      v => console.log(v),
      //err => console.log(`Erro Esp.: ${err}`)
    )
  .then(() => console.log('Quase Fim!'))
  .catch(err => console.log(`Erro Geral: ${err}`)) // Geralmente o catch fica no final especificamente para ocorrer o encadeamento das chamadas do then
  .then(() => console.log('Fim!'))

  // Quando feito um tratamento de erro especifico em um then anterior, nesse caso o catch não é chamado
  // Ou seja, o erro vai cair no primeiro tratamento que ele encontrar