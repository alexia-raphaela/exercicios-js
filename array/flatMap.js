const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]
// FlatMap aborda o fato de você ter uma matriz e transformar em um único array

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)


Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback)) // Essa callback, é a callback que estou passando na função que vai transformar os meus dados
} // e com o resultado do map eu vou fazer um apply em cima da função concat

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)