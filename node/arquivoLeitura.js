const fs = require('fs') // file system, é um módulo interno do node

const caminho = __dirname + '/arquivo.json'

// ler um arquivo de forma Sincrona...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`) // Isso só será achado se config for um objeto
})

const config = require('./arquivo.json')
console.log(config.db) // acesso ao objeto config já instanciado

// leitura de uma pasta
fs.readdir(__dirname, (err, arquivos) => {  // __dirname é uma constante que está presente em todos os arquivos, e módulos do node que representa o diretório atual
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})