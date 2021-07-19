// vai ser o responsavel por ter o servidor tanto para prover os dados estaticos, como tambem para ter alguns serviços
// a dependencia body parser é responsavel por fazer o parser da requisicao
// nodemon ira servir para monitorar os arquivos sempre que houver uma mudança
const bodyParser = require('body-parser')
const express = require('express')
// instanciar o express
const app = express()
// middleware é uma camada de mediacao entre tecnologias que nao sabem se comunicar ent//re si
// middleware vai ser executado quando uma determinada requisicao chegar
// servindo todos os conteudo estaticos que ele encontrar na mesma pasta
app.use(express.static('.')) 
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

app.listen(8080, () => console.log('Executando...'))