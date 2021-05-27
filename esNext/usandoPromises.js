// Com promise
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
// obter no final a lista de nomes
/*let nomes = []
// uma promise sendo chamada dentro da outra
getTurma('A').then (alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`)) // pegando nome do aluno
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})*/
// Essa função eu posso passar varias promises dentro dela e quando todas as promises forem resolvidas, a cadeia dos metodos then são chamados
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
  // No final terei um unico array com todos os alunos de cada turma
  .then(turmas => [].concat(...turmas))
  .then(alunos => alunos.map(aluno => aluno.nome))
  .then(nomes => console.log(nomes))

getTurma('D').catch(e => console.log(e.message))