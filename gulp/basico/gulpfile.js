/// gulp é baseado em  uma serie de tarefas que vao automatizar os processos dentro da sua aplicação
// essa serie de tarefas podem ser executadas de forma sequencial, uma tarefa seguida da outra
// ou dependendo do cenario, voce pode paralelisar algumas tarefas, tarefas serao executadas em paralelo
// importando o gulp
const gulp = require('gulp')
const { series, parallel } = require('gulp')


// cada função representa uma tesk
const antes1 = cb => {
    console.log('Tarefa Antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2!')
    return cb()
}

// notificar o gulp que uma tarefa foi concluida
function copiar(cb) {
    // serve para selecionar quais arquivos 
    gulp.src()
    return cb()
}

const fim = cb => {
    console.log('Tarefa Fimm!')
    return cb()
}


module.exports.default = series(
   parallel( antes1, antes2),
    copiar,
    fim
)

