// usando a notação literal
const obj1 = {}       // criação de forma literal de objetos, a partir dos colchetes
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)   // objeto sendo criado a partir de uma função construtora new Object
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc) {     // é possivel criar suas próprias funções construtoras
    this.nome = nome                      // preco e desc está encapsulado, já this.nome ficará visivel para fora do objeto
    this.getPrecoComDesconto = () => {
      return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)    // usando operador new
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory         você pode criar um objeto usando tanto uma função construtora interna como uma notação literal
// função factory é um padrão de projeto, cria e fabrica alguma coisa
function criarFuncionario(nome, salarioBase, faltas) {
    return {
      nome, 
      salarioBase,
      faltas,
      getSalario() {
          return (salarioBase / 30) * (30 - faltas)
      }
    }
} 
const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}') // Esse testo foi convertido para objeto, logo abaixo
console.log(fromJSON.info)

// é utlizado JSON para que você possa manipular os dados como objeto e não como texto.
// JSON é texto e objeto é regido pela notação literal de objeto.



