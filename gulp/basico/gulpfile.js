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
    // serve para selecionar quais arquivos voce vai usar como entrada para workflow que voce vai definir dentro desse arquivo
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    // todo arquivo que tiver dentro da pastaA que tem a extensão txt sera passado para a pastaB
    gulp.src('pastaA/**/*.txt')
    // EXEMPLO DE UMA POSSIVEL PIPELINE

        // aplicar transformaçoes nos arquivos que voce definiu como arquivos de entrada
        // esse conjunto de pipe sera um pipeLine
        // aplicando transformaçoes em uma serie de dados e arquivos
        // .pipe(imagemPelaMetade())
        // .pipe(imagemEmPretoEBranco())
        // .pipe(transformaçãoA())
        // .pipe(transformaçãoB())
        // .pipe(transformaçãoC())

        // colocar imagens em uma pasta de destino
        .pipe(gulp.dest('pastaB'))
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

