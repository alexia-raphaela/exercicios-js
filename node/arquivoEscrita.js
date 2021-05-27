const fs = require('fs')

// Salvar esse objeto no disco
const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => { // ArquivoGerado não existe, portanto no final do código, ele será criado e salvo no meu diretório
    console.log(err || 'Arquivo salvo!')
})