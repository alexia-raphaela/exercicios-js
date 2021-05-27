// Trabalhar com promise de uma forma mais simples
// É uma função assincrona que retorna uma promise
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    // resolve e reject são duas funções callbacks , função resolver a promise é atendida e reject, a promise é rejeitada
    return new Promise((resolve, reject) => {
      http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
          resultado += dados
        })

        res.on('end', () => {
          // se o parse for feito direitinho, então chama resolve, passando o json
            try {
                resolve(JSON.parse(resultado))
            } catch(e) {
                reject(e)
            }
        })
    })
  })
}
// Recurso do ES8
// Objetivo é de simplificar o uso de promises...
let obterAlunos = async () => {
    const ta = await getTurma('A') // atribuindo o resultado da função A a constante ta
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
}
// retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))


