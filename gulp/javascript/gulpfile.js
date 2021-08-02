const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            // nos arquivos de comentario nao seram transferidos para o arquivo final
            comments: false,
            // pegar versao mais nova do javascript
            presets: ["env"]
        }))
        .pipe(uglify())
        .pipe(concat('código.min.js'))
        .pipe(gulp.dest('build'))

        return cb()
}