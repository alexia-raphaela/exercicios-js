const alunos = {
  'Aléxia': [6.7, 8.9, 5.0, 9.8],
  'Robert': [8, 9.8, 9.1, 8.8]
}
const melhorAluno = obj => {
  const alunos = []
  for(let [chave, valor] of Object.entries(obj)) {
    let soma = 0
    for(let i in valor){
      soma += valor[i]
    }
    alunos.push({nome: chave, media: soma / valor.length})
  }

  const ranking = alunos.sort((alunoA, alunoB) => {
    return alunoB.media - alunoA.media
  })
  //console.log(ranking)
  
  const primeiroLugar = ranking[0]

  return primeiroLugar
}
console.log(melhorAluno(alunos))
