// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
      nome: 'Raul',
      idade: 56,
      endereco: {
          logradouro: 'Rua ABC',
          numero: 123
      }
    },
    condutores: [{        // array de objetos
       nome: 'Junior',
       idade: 19

    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
      // posso também criar uma função dentro do objeto para objeto carro por exemplo
    }
}
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereço']['logradouro'] = 'Av Gigante' // acessar notação colchetes, é possivel
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)
