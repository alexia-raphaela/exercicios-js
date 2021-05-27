// Cada processo que precisa abrir uma conexão, uma comunicação com rede, ele precisa ter uma porta
// Porta é unica por processo
// A porta é a forma que você tem para selecionar qual processo vai atender aquela requisição
// porta significa processo
const porta  = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

// Para qualquer requisição que você faça no seu servidor usando express que vai obrigatoriamente passar pelo middleware abaixo e fará um parse, que vai transformar isso em objeto, para acessar a requisição
app.use(bodyParser.urlencoded( { extended: true }))    // O resultado dessa função urlencoded será uma função middleware

/*app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})*/

app.get('/produtos', (req, res, next) => { // Trará todos os produtos cadastrados
    //res.send({nome: 'Notebook', preco: 123.45}) // send envia uma resposta e esse objeto será convertido para o formato json
    res.send(bancoDeDados.getProdutos())
})
// Trará um produto específico baseado no id
app.get('/produtos/:id', (req, res, next) => {  // O método get tem como objetivo, obter alguma informação do servidor 
    //console.log('param: ', req.params.id),
    res.send(bancoDeDados.getProduto(req.params.id)) // req.params, é o local onde eu passei os parametros na url
    // vem da requisação os parametros, obtenho a informação e mando a resposta
}) 
// post é uma função que irá salvar o resultados das funções acimas
// a requisição é o que pega essas informações, salva e quando acessado o que foi salvo req trás esses valores salvos
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})

/*app.get('/home', (req,res) => {
  console.log('Alguem acessou a home')
  res.send('Ta fazendo o que aqui palhaço')
})*/

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})
