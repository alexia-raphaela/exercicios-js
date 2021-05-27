console.log(Math.ceil(6.1)) // Operar um arredondamento

const obj1 = {}
obj1.nome = 'Bola' // Criando um atributo dinâmicamente
//obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj (nome) {
  this.nome = nome // this.nome, significa o nome associado ao objeto que for criado a partir dessa função
  this.exec = function() {
    console.log('Exec...')
  }
}

/* this.nome = nome, estou querendo dizer que vou receber nome por parametro 
E o this.nome ficará visivel para quem instanciar um objeto  */
// ou seja estou criando um atributo público, a partir de this. e notação ponto

const obj2 = new Obj('Cadeira') // o parametro string cadeira está sendo atribuido para this.nome
const obj3 = new Obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome) // Com a notação ponto é a forma que você tem acessar os mebros, atributos, funções
obj3.exec()