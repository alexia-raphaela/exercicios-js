const moduloA = require('../../moduloA') // ../Você está saindo da pastaB em seguida sairá da pastaA e estará na pasta node  
console.log(moduloA.ola)

const c = require('./pastaC/index')
console.log(c.ola2)

// módulos internos do node

// Quando o arquivo que eu quero acessar não está na pasta local, posso passar direto o nome, sem caminho relativo
const http = require('http') // require é um método do node, que nesse caso está buscando o arquivo http da pasta node-modules
const { reduce } = require('lodash')
http.createServer((req, res) => { // Callback function que irá gerar uma requisição
    res.write('Bom dia!')
    res.end() // finalizar requisição
}).listen(8080) // O código continua sendo executado, não fnaliza