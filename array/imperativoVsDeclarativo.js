const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo: Vai abordar os detalhes do passo a passo, o foco não é o que deve ser feito e sim como deve ser feito
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo: Vai abordar o que tem que ser feito e internamente isso será feito
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma) // O reduce tem essa idéia de agregar, de reduzir os valores em um só
console.log(total2 / alunos.length)
