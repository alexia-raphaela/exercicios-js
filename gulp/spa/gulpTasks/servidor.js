const gulp = require('gulp')
const webserver = require('gulp-webserver')
// watch sera utlizado para monitorar os arquivos
const watch = require('gulp-watch')

function servidor() {
    return gulp.src('build')
    // passando as configurações do servidor
        .pipe(webserver({
            port: 8080,
            // essa configuração faz com que o seja aberto o browser
            open: true,
            livereload: true,
        }))
}

function monitorarArquivos(cb) {
    // se esse arquivo mudar sera chamada uma função
    // e essa função ira chamar uma tesk do gulp
   watch('src/**/*.html', () => gulp.series('appHTML')())
   
    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor

}