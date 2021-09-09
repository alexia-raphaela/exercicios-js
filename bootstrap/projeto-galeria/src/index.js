// index.js é o entry point do webpack
// Arquivo SASS
// a partir daqui o webpack comecara a monitorar esses arquivos
import './scss/index.scss'

// Depedencias
// jquery é chamado primeiro, porque o bootstrap depende dele
import 'jquery'
import 'bootstrap'

// Meus arquivos JS
import './js/core/includes'