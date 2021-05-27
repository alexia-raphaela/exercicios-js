const http = require('http')

const getTurma = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
  return new promise((resolve, reject) => {
    http.get(url, res => {
      let resultado = ''

      res.on('data', dados => {
        resultado += dados
      })

      res.on('end', () => {
          callback(JSON.parse(resultado))
      })
     
    })

  })
}

async function refatorar() {
   
    await getTurma('A')
      console.log(turmas => [].concat(...turmas))

    await getTurma('B')
      console.log(nomes => console.log(nomes))
}
refatorar()