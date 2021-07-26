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
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// fazendo upload de um arquivo
const multer = require('multer')

const storage = multer.diskStorage({
  //este objeto serve para cofigurar personalizar uma pasta, arquivo 
  destination: function (req, file, callback) {
    callback(null, './upload')
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
// ira retornar um objeto, uma resposta para o frontend
// função middlewra ira tratar o recebimento desse formulario
app.post('/formulario', (req, res
) => {
  res.send({
    // tudo que vier na resposta vai ser jogado nesse novo objeto, que tambem esta sendo devolvido com resposta para o fronteend
    // retornar tudo que vier no body mais o id
    ...req.body,
    // retornando o id mais o objeto, retornando para a minha pagina
    // o id foi calculado
    id: Math.round(Math.random() * (100 - 1) + 1)
  })
});

app.get('/parOuImpar', (req, res) => {
  // receber dados do seu fronteend
  // req.body
  // req.query
  // req.params, diferença entre query, é forma como voce passara dados por parametro na url
  // em cima do numero que recebi como parametro, sera calculado se o numero é par ou impar
  const par = parseInt(req.query.numero) % 2 === 0
  res.send({
      resultado: par ? 'par' : 'impar'
  })

})

// app.get('/teste', (req, res) => res.send('Ok'))
app.listen(8080, () => console.log('Executando...'))