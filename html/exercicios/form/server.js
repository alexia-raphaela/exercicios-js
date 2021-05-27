// Servidor ira receber a requisição no barra cliente, a partir de uma requisiçao do tipo post
const express = require('express')
const app = express()
// Fazendo um parse no corpo da requisição, vai pegar esses dados e vai jogar dentro request.body
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extend: true }))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    // Quando o usuario clicar no formulario para submeter
    resp.send(`<h1>Parabéns</h1>`)
})

app.listen(3003)