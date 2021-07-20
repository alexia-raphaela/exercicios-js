// vai ser o responsavel por ter o servidor tanto para prover os dados estaticos, como tambem para ter alguns serviços
// a dependencia body parser é responsavel por fazer o parser da requisicao
// nodemon ira servir para monitorar os arquivos sempre que houver uma mudança
const bodyParser = require('body-parser')
const express = require('express')
// instanciar o express
const app = express()
// middleware é uma camada de mediacao entre tecnologias que nao sabem se comunicar ent//re si
// middleware vai ser executado quando uma determinada requisicao chegar
app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// fazendo upload de um arquivo
const multer = require('multer')

const storage = multer.diskStorage({
  //este objeto serve para cofigurar personalizar uma pasta, arquivo 
  destination: function (req, file, callback) {
    callback(null, './unpload')
  },
  filename: function (req, file, callback) {
    // quando for escolhido o nome de um arquivo, sera seguido esse padrao de nome
    callback(null, `${Date.now()}_${file.originalname}`)
  }
  
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
  upload(req, res, err => {
      if (err) {
        return res.end('Ocorreu um erro.')
      }
      res.end('Concluido com sucesso')
  })
})

// app.get('/teste', (req, res) => res.send('Ok'))
app.listen(8080, () => console.log('Executando...'))