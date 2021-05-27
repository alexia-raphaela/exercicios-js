//ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
  nome,
  ola() {
    return 'Oi gente!'
  }
}
console.log(pessoa.nome, pessoa.ola())

// Class
// trabalhando com herança em classe
class Animal {}
class Cachorro extends Animal { 
    falar() {
      return 'Au au!'
    }
}
// com a palavra reservada new você pode a paritir de uma classe criar um novo objeto
// e a pratir de uma função construtora você pode criar novas instancias com operador new
console.log(new Cachorro().falar())