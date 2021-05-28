// Servidor ira receber a requisição no barra cliente, a partir de uma requisiçao do tipo post
const express = require('express')
const app = express()
// Fazendo um parse no corpo da requisição, vai pegar esses dados e vai jogar dentro request.body
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extend: true }))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    //requisição do tipo get, od dados não vem no body e sim na query
    console.log(req.query)
    // Quando o usuario clicar no formulario para submeter
    resp.send(`<h1>Parabéns. Usuário Incluido!</h1>`)
})

app.post('/usuarios/:id', (req, resp) => {
    //mostrar tanto o id que foi obtido a partir dos parametros da url
    console.log(req.params.id)
    // obter tudo que veio no body
    console.log(req.body)
    // Quando o usuario clicar no formulario para submeter
    resp.send(`<h1>Parabéns. Usuário Alterado!</h1>`)
})


app.listen(3003)