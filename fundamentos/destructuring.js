// Novo recurso do ES2015
// Destucturing, desestruturação de um elemento, seja um array ou objeto, ou seja, tirando alguma coisa de dentro desse elemento

const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
      logradouro: 'Rua ABC',
      numero: 1000
  }
}

const { nome, idade } = pessoa // Utilizando o Destructuring
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // Está tirando o atributo nome e idade de objeto pessoa e modificando o nome desses atributos
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa // Tirando atributos que ainda não existem no objeto pessoa e atribuindo um valor padrão para eles, caso esses atributos realmente não existem
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa // Extraindo atributos dentro de outro atributo
console.log(logradouro, numero, cep)

