// Transformar classe pessoa em uma função construtora
function Pessoa(nome) { 
      this.nome = nome

      this.falar = function() {
      console.log(`Meu nome é ${this.nome}`) 
  }
}

const p1 = new Pessoa('João') 
p1.falar()
console.log(p1.nome)

// Posso criar um objeto a partir de uma função Construtora, a partir de uma Classe e uma função Factory